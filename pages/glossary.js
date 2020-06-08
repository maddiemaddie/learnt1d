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
      <h1>Glossary of Terms</h1>
      <h3>Insulin -</h3>
      <p>A hormone made by your pancreas that helps your body use glucose (blood sugar) for energy. Insulin helps to control blood glucose levels.</p>
      <h3>Pancreas -</h3>
      <p>An organ located behind the lower part of your stomach. The pancreas makes the hormone insulin to control blood glucose and also makes enzymes and fluids for digestion.</p>
      <div class="reference">Defintions taken from the <a href="https://www.niddk.nih.gov/">National Institute of Diabetes and Digestive and Kidney Diseases</a></div>
    </Layout>
  </div>
  <div className="bot">
  <Bot />
  </div>
</>
  )
}
