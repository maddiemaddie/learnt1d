import Head from 'next/head'
import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <iframe src="https://api.digitalmedia.hhs.gov/api/v2/resources/media/18240/syndicate.html?stripStyles=true&stripScripts=true&stripBreaks=false&stripImages=true&stripClasses=true&stripIds=true&displayMethod=undefined&autoplay=false&userId=4673" width="775" height="650" name="Syndicated Content" frameborder="0"></iframe>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}
