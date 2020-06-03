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
        <title>Learn T1D | Glossary</title>
      </Head>
      <h3>Glossary of Terms</h3>
      <Link href="/">
        <a className={utilStyles.colorInherit}>Home</a>
      </Link>
      <div className="defintion">
      <dl>
        <dt>Coffee</dt>
          <dd>Black hot drink</dd>
        <dt>Milk</dt>
        <dd>White cold drink</dd>
      </dl>
      </div>
    </Layout>
  </div>
  <div className="bot">
  <Bot />
  </div>
</>
  )
}
