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
        <h2>Diabetes sucks.</h2>
        <p class="des">
        We're here to help. Please click which description best fits you.
        </p>
      <p><Link href="/posts/sample-post/"><a>Diabetic</a></Link> or <Link href="/posts/first-post/"><a>Supporter</a></Link></p>
    </Layout>
  )
}
