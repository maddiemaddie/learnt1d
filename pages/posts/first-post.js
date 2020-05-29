import Head from 'next/head'
import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
    $(document).ready(function(){$.getJSON('https://api.digitalmedia.hhs.gov/api/v2/resources/media/18240/syndicate.json?stripStyles=true&stripScripts=true&stripBreaks=false&stripImages=true&stripClasses=true&stripIds=true&displayMethod=undefined&autoplay=false&userId=4673&callback=?', function(data){$('#syndicatedContent_18240_227960618084237').html(data.results[0].content);});});
  )
}
