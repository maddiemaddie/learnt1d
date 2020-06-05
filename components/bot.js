import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';

const config = {
   width: "300px",
   height: "400px",
   floating: true,
   botAvatar: "drop.svg",
   hideBotAvatar: true,
   hideUserAvatar: true,
   enableSmoothScroll: true,
   enableMobileAutoFocus: true,
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
          message: "Hello! I'm here to help. Are you looking for anything in particular?",
          trigger: '2',
    },
    {
      id: '2',
      options: [
        { value: 1, label: 'Yes', trigger: '5' },
        { value: 2, label: 'No', trigger: '3' },
        { value: 3, label: 'Not sure', trigger: '4' },
      ],
    },
        {
        id: '3',
          message: "Sounds great! I'm here if you need anything.",
          end: true,
        },
        {
          id: '4',
          message: 'Wrong answer, try again.',
      //    trigger: '2',
        },
        {
          id: '5',
          message: 'Awesome! You are a telepath!',
          end: true,
        },
];

const Bot = () => (
  <ThemeProvider theme={theme}>
    <ChatBot steps={steps} {...config}/>
  </ThemeProvider>
)

export default Bot
