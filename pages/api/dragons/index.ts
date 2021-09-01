import { NextApiRequest, NextApiResponse } from 'next'
import pMap from 'p-map'
import { chunk, flatten, orderBy } from 'lodash'
import { utils as etherUtils, BigNumber } from 'ethers'
import type { OpenseaResponse, Asset } from '../../../utils/openseaTypes'
import DragonIDs from '../../../data/dragon-ids.json'

const chunked = chunk(DragonIDs, 20)
const apiKey = process.env.OPENSEA_API_KEY

const fetchDragonPage = async (ids: string[]) => {
  let url = 'https://api.opensea.io/api/v1/assets?collection=lootproject&'
  url += ids.map((id) => `token_ids=${id}`).join('&')

  const res = await fetch(url, {
    headers: {
      'X-API-KEY': apiKey,
    },
  })
  const json: OpenseaResponse = await res.json()
  return json.assets
}

export interface DragonInfo {
  id: string
  price: Number
  url: string
  svg: string
}

export const fetchDragons = async () => {
  const data = await pMap(chunked, fetchDragonPage, { concurrency: 2 })
  const mapped = flatten(data)
    .filter((d) => {
      return (
        d.sell_orders &&
        d.sell_orders.length > 0 &&
        d.sell_orders[0].payment_token_contract.symbol == 'ETH'
      )
    })
    .map((a: Asset): DragonInfo => {
      return {
        id: a.token_id,
        price: Number(
          etherUtils.formatUnits(
            BigNumber.from(a.sell_orders[0].current_price.split('.')[0]),
          ),
        ),
        url: a.permalink + '?ref=0x1b541c50b42d65040fc51197f0c6277dfa96df0f',
        svg: a.image_url,
      }
    })
  return {
    dragons: orderBy(mapped, ['price', 'id'], ['asc', 'asc']),
    lastUpdate: new Date().toISOString(),
  }
}

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await fetchDragons()
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
