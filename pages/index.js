import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>USAF Shippers Crash Page</title>
        <link rel="icon" href="https://i.imgur.com/Ep405fQ.png" />
      </Head>

      <main>
        <Header title="Nice try scammer!" />
        <img src="https://c.tenor.com/mAlJkmN3TEcAAAAC/hackerman-emote.gif" />
      </main>

      <Footer />
    </div>
  )
}
