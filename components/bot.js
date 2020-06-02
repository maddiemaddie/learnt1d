import ChatBot from 'react-simple-chatbot';

function Bot {
  return (
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
  )
}

export default Bot
