import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Nice try scammer" />
        <p className="description">
    <img src="https://c.tenor.com/mAlJkmN3TEcAAAAC/hackerman-emote.gif" >
        </p>
      </main>

      <Footer />
    </div>
  )
}
