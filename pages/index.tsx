import { DragonInfo, fetchDragons } from './api/dragons'
import { format as ts } from 'timeago.js'

export async function getStaticProps() {
  const data = await fetchDragons()
  return {
    props: {
      dragons: data.dragons,
      lastUpdate: data.lastUpdate,
    },
    revalidate: 300,
  }
}

interface Props {
  dragons: DragonInfo[]
  lastUpdate: string
}

const Dragon = ({ dragon }: { dragon: DragonInfo }) => {
  return (
    <a href={dragon.url} target="_blank">
      <div className="m-auto pb-4 mb-8 flex flex-col justify-center items-center gap-2 p-4 md:m-4 border border-white transform hover:scale-105 transition-all bg-black w-full md:w-96">
        <img src={dragon.svg} />
        <div className="text-center">
          <p className="text-lg">#{dragon.id}</p>
          <p>{dragon.price} ETH</p>
        </div>
      </div>
    </a>
  )
}

const IndexPage = ({ dragons, lastUpdate }: Props) => {
  return (
    <div className="py-3 md:pb-0 font-mono flex flex-col justify-center items-center gap-4 pt-10 md:w-screen">
      <h1 className="text-lg md:text-3xl">Dragon Guild</h1>
      <div className="text-center max-w-screen-md md:leading-loose">
        <p className="md:text-xl">
          There are {dragons.length} bags for sale with Dragonskin. The floor
          price is {dragons[0].price} ETH.
        </p>
        <p className="md:text-lg pt-2">
          Site by{' '}
          <a
            target="_blank"
            href="https://twitter.com/xitijpatel"
            className="underline"
          >
            HorizonXP
          </a>
          . Join the{' '}
          <a
            target="_blank"
            className="underline"
            href="https://dragonguild.vercel.app"
          >
            Discord
          </a>
          .
        </p>
        <p className="text-sm mv-4">Last updated {ts(lastUpdate)}</p>
      </div>
      <div className="grid md:grid-cols-2 pt-5">
        {dragons.map((dragon) => {
          return <Dragon dragon={dragon} key={dragon.id} />
        })}
      </div>
    </div>
  )
}

export default IndexPage
