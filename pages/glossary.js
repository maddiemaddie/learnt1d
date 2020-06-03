import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Bot from '../components/bot';

export default function nextpage() {
  return (
    <>
    <div className="bot">
    <Bot />
    </div>
    <div>
    <Layout home>
      <Head>
        <title>Learn T1D | Glossary</title>
      </Head>
      <h3>Glossary of Terms</h3>
      <Link href="/">
        <a className={utilStyles.colorInherit}>Home</a>
      </Link>
      <div className="defintion">
        <h3>Insulin</h3>
        <p>A hormone made by your pancreas that helps your body use glucose (blood sugar) for energy. Insulin helps to control blood glucose levels.</p>
      </div>
    </Layout>
  </div>
</>
  )
}
