import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';

const config = {
   width: "300px",
   height: "400px",
   floating: true,
   botAvatar: "drop.svg",
   hideBotAvatar: true;
 };

const theme = {
  background: '#f5f8fb',
  fontFamily: 'sans-serif',
  headerBgColor: '#271789',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#cecece',
  botFontColor: '#333333',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const steps = [
  {
    id: '1',
    message: 'Hello World',
    trigger: '2',
  },
  {
    id: '2',
    message: 'Here is a second message',
    trigger: '3',
  },
  {
    id: '3',
    message: 'Here is another message',
  },
];

const Bot = () => (
  <ThemeProvider theme={theme}>
    <ChatBot steps={steps} {...config}/>
  </ThemeProvider>
)

export default Bot
