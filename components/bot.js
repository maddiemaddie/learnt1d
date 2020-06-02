import ChatBot from 'react-simple-chatbot';

export default function Bot{
  return (
      <ChatBot
      steps={[
        {
          id: 'hello-world',
          message: 'Hello World!',
          end: true,
        },
      ]}
      />
  )
}
