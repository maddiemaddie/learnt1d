import React from 'react';
import InstagramEmbed from 'react-instagram-embed';

export default function Post() {
  return (
    <InstagramEmbed
  url='https://www.instagram.com/p/CA_bCroBXjz/'
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
