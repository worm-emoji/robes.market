import Link from 'next/link'
import { RobeInfo } from './api/robes'
import { format as ts } from 'timeago.js'

export async function getStaticProps() {
  const res = await fetch('https://robes-market.vercel.app/api/robes')
  const data = await res.json()

  return {
    props: {
      robes: data.robes,
      lastUpdate: data.lastUpdate,
    },
    revalidate: 300,
  }
}

interface Props {
  robes: RobeInfo[]
  lastUpdate: string
}

const Robe = ({ robe }: { robe: RobeInfo }) => {
  return (
    <a href={robe.url} target="_blank">
      <div className="m-auto pb-4 mb-8 flex flex-col justify-center items-center gap-2 p-4 md:m-4 border border-white transform hover:scale-105 transition-all bg-black w-96">
        <img src={robe.svg} />
        <div className="text-center">
          <p className="text-lg">#{robe.id}</p>
          <p>{robe.price} ETH</p>
        </div>
      </div>
    </a>
  )
}

const IndexPage = ({ robes, lastUpdate }: Props) => {
  return (
    <div className="font-mono flex flex-col justify-center items-center gap-4 pt-10 md:w-screen">
      <h1 className="text-3xl">Divine Robes</h1>
      <div className="text-center">
        <p className="text-xl">
          The current floor price for Divine Robes is {robes[0].price} ETH.
        </p>
        <p>Last updated {ts(lastUpdate)}</p>

        <div className="grid md:grid-cols-2 pt-5 w-full">
          {robes.map((robe) => {
            return <Robe robe={robe} key={robe.id} />
          })}
        </div>
      </div>
    </div>
  )
}

export default IndexPage
