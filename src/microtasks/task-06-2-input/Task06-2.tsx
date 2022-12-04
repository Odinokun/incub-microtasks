import React, {FC, useState} from 'react';
import {Input} from './components/Input';
import {Button} from './components/Button';

export const Task062: FC = () => {

  const [messages, setMessages] = useState([
    {message: 'Message 01'},
    {message: 'Message 02'},
    {message: 'Message 03'},
    {message: 'Message 04'},
  ]);

  const [title, setTitle] = useState('');

  const addMessage = (val: string) => {
    const newMessage = {message: val};
    setMessages([newMessage, ...messages])
  }

  const callbackBtnHandler = () => {
    addMessage(title);
    setTitle('');
  }

  return (
    <>
      <br/>
      <br/>
      <br/>
      <hr/>
      <hr/>
      <br/>

      <Input setTitle={setTitle} title={title}/>
      <Button name="STUPID BUTTON" callBack={callbackBtnHandler}/>

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