import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Learn T1D'
export const siteTitle = 'Learn T1D'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Committed to raising awareness about type 1 diabetes"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Link href="/"><a><img src="logo.svg" alt="Learn T1D logo"  className="logo" width="100%" height="100%"/></a></Link>
          </>
        ) : (
          <>
          </>
        )}
      </header>
      <ul className={styles.nav}>
        <li><Link href="/resources"><a>Resources</a></Link></li>
        <li><Link href="/glossary"><a>Glossary</a></Link></li>
        <li><Link href="/about"><a>About</a></Link></li>
      </ul>
      <main>{children}</main>
      <footer className={styles.foot}>
      Knowledge is Power
      </footer>
    </div>
  )
}
