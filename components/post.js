import React from 'react';
import InstagramEmbed from 'react-instagram-embed';

export default function Post() {
  return (
    <InstagramEmbed
  url='https://instagr.am/p/LJ2tq9AUaO/'
  maxWidth={320}
  hideCaption={true}
  containerTagName='div'
  injectScript
  protocol=''
  onLoading={() => {}}
  onSuccess={() => {}}
  onAfterRender={() => {}}
  onFailure={() => {}}
/>
)
}
