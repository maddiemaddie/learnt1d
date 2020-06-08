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
      <h3>Insulin </h3>
      <p>A hormone made by your pancreas that helps your body use glucose (blood sugar) for energy. Insulin helps to control blood glucose levels.</p>
      <h3>Pancreas </h3>
      <p>An organ located behind the lower part of your stomach. The pancreas makes the hormone insulin to control blood glucose and also makes enzymes and fluids for digestion.</p>
      <h3>Hormone</h3>
      <p>A chemical one part of your body makes and releases into your blood to help trigger or control functions in another part of your body.</p>
      <h3>Glucagon</h3>
      <p>A hormone that raises blood glucose. Glucagon is given by a shot and is used to treat severe low blood sugar, or hypoglycemia.</p>
      <h3>Immune system</h3>
      <p>Your body's system for protecting itself from infection by finding and destroying bacteria, viruses, and other substances that may be harmful.</p>
      <h3>A1C Test</h3>
      <p>A blood test that provides information about your average levels of blood glucose, also called blood sugar, over the past 3 months.</p>
  <div class="reference">Defintions taken from the <a href="https://www.niddk.nih.gov/">National Institute of Diabetes and Digestive and Kidney Diseases</a></div>
    </Layout>
  </div>
  <div className="bot">
  <Bot />
  </div>
</>
  )
}
