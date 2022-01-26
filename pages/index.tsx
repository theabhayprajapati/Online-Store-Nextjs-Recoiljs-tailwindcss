import Head from 'next/head'
import Basket from '../components/Basket'
import Homepage from '../components/Homepage'

export default function Home() {
  return (
    <div className="font-mono text-xl p-2">
      <Head>
        <title>
          Recoil-Store
        </title>
      </Head>
      <main>
        <Homepage />
        <Basket />
      </main>

    </div>)
}
