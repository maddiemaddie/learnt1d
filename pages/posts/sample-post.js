import Head from 'next/head'
import Link from 'next/link'
import ChatBot from 'react-simple-chatbot';

export default function SamplePost() {
  return (
    <>
      <Head>
        <title>Sample Post</title>
      </Head>
<ChatBot
  steps={[
    {
      id: 'hello-world',
      message: 'Hello World!',
      end: true,
    },
  ]}
/>
      <h1>Sample Post with Chatbot</h1>
      <h2>This is a sample post. Click here to gom
        <Link href="/">
          <a>Back to home</a>
        </Link>
       <Link href="/posts/sample-post/">
          <a>Sample post</a>
      </Link>
      </h2>
    </>
  )
}
