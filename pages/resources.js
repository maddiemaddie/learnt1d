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

      <a href="/diabetes-diagnosis" className="card">
        <h3>Diabetes & Diagnosis</h3>
        <p>Your health care professional can diagnose diabetes, prediabetes, and gestational diabetes through blood tests.</p>
      </a>

      <a
        href="/symptoms-and-causes"
        className="card"
      >
        <h3>Symptoms & Causes</h3>
        <p>What are the symptoms and causes of diabetes?</p>
      </a>

      <a
        href="/insulin-and-other-treatments"
        className="card"
      >
        <h3>Insulin, Medicines, &amp; Other Diabetes Treatments</h3>
        <p>
          Taking insulin or other diabetes medicines is often part of treating diabetes.
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
