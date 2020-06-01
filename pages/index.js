import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Type 1 Diabetes</p>
        <p>
          Click <Link href="/posts/first-post/"><a>here</a></Link> to move to the next page
        </p>
      </section>
    </Layout>
  )
}
