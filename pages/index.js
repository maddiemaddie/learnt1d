import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Bot from '../components/bot';

export default function Home() {
  return (
    <>
    <Layout home>
      <Head>
        <title>Learn T1D</title>
      </Head>
       <div className="defintion">
     <h3>What is Learn T1D?</h3>
    <p>We're a community committed to raising awareness about type one diabetes. T1D impacts the lives of millions, yet many aren't aware of the effects it has. We're coming together to change that</p>
      </div>
    </Layout>
    <div className="bot">
    <Bot />
    </div>
</>
  )
}
