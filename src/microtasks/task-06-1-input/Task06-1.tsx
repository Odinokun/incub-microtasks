import React, {FC, useState} from 'react';
import {FullInput} from './components/FullInput';

export const Task061: FC = () => {

  const [messages, setMessages] = useState([
    {message: 'Message 01'},
    {message: 'Message 02'},
    {message: 'Message 03'},
    {message: 'Message 04'},
  ]);

  const addMessage = (val: string) => {
    const newMessage = {message: val}
    setMessages([newMessage, ...messages])
  }

  return (
    <>
      <br/>
      <br/>
      <br/>
      <br/>
      <FullInput addMessage={addMessage}/>

      <ul>
        {messages.map((el, index) => {
          return (
            <li key={index}>{el.message}</li>
          )
        })}
      </ul>
    </>
  )
}