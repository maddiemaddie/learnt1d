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
        <p>Sample website using Next.js</p>
        <p>
          Click <Link href="/posts/first-post/"><a>here</a></Link> to move to the next page
          Here is a <Link href="/posts/sample-post/"><a>Sample post</a></Link>
        </p>
      </section>
    </Layout>
  )
}
