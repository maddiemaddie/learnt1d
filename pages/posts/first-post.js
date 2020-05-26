import Head from 'next/head'
import Link from 'next/link'
import ChatBot from 'react-simple-chatbot'

export default function FirstPost() {
  return (
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <>
      <ChatBot
        steps={[
          {
            id: 'hello-world',
            message: 'Hello World!',
            end: true,
          },
        ]}
      />
    </>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
  )
}
