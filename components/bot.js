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
   placeholder: "Type a message",
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
        { value: 3, label: 'Not sure', trigger: '3' },
      ],
    },
        {
        id: '3',
          message: 'Okay! Type "HELP" if you need anything.',
          trigger: '3.2',
        },
        {
          id: '3.2',
          user: true,
          trigger: 5,
        },
        {
          id: '4',
          message: "That's alright. " + 'Type "HELP" if you need anything.',
          user: true,
          trigger: '5',
        },
        {
          id: '5',
          message: 'Awesome! Here are some things I can help you find:',
          trigger: '6',
        },
        {
          id: '6',
          options: [
            { value: 1, label: 'Support', trigger: 'support' },
            { value: 2, label: 'Definitions', trigger: 'def'},
          ]
        },
        {
          id: 'support',
          message: 'If you or a loved one need support, you can visit' + <a href="www.google.com"></a> + 'this link',
        },
        {
          id: 'def',
          message: 'What word would you like defined?',
          trigger: 'word',
        },
        {
          id: 'word',
          options: [
            { value: 1, label: 'Insulin', trigger: 'insulin' },
            { value: 2, label: 'Pancreas', trigger: 'pancreas' },
          ]
        },
        {
          id: 'insulin',
          message: 'A hormone made by your pancreas that helps your body use glucose (blood sugar) for energy. Insulin helps to control blood glucose levels.',
        },
        {
          id: 'pancreas',
          message: 'An organ located behind the lower part of your stomach. The pancreas makes the hormone insulin to control blood glucose and also makes enzymes and fluids for digestion.',
        },
];

const Bot = () => (
  <ThemeProvider theme={theme}>
    <ChatBot steps={steps} {...config}/>
  </ThemeProvider>
)

export default Bot
