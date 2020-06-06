import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Bot from '../components/bot';

export default function nextpage() {
  return (
    <>
    <div>
    <Layout home>
      <Head>
        <title>Learn T1D | Resources</title>
      </Head>
      <main>
      <h1>Resources</h1>

    <div className="grid">
      <a href="/what-is-type-1-diabetes" className="card">
        <h3>What is Type 1 Diabetes?</h3>
        <p>Diabetes occurs when your blood glucose, also called blood sugar, is too high.</p>
      </a>

      <a href="https://nextjs.org/learn" className="card">
        <h3>Learn &rarr;</h3>
        <p>Learn about Next.js in an interactive course with quizzes!</p>
      </a>

      <a
        href="https://github.com/zeit/next.js/tree/master/examples"
        className="card"
      >
        <h3>Examples &rarr;</h3>
        <p>Discover and deploy boilerplate example Next.js projects.</p>
      </a>

      <a
        href="https://vercel.com/new?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        className="card"
      >
        <h3>Deploy &rarr;</h3>
        <p>
          Instantly deploy your Next.js site to a public URL with Vercel.
        </p>
      </a>
    </div>
  </main>
    </Layout>
  </div>
  <div className="bot">
  <Bot />
  </div>
</>
  )
}
