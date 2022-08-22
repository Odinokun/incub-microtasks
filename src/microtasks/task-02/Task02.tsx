import React, {FC} from 'react';
import {Button} from './components/Button';

type PropsType = {};

export const Task02: FC<PropsType> = (props) => {

  const Button1Foo = (subs: string, age: number) => {
    console.log(subs, age)
  }
  const Button2Foo = (subs: string) => {
    console.log(subs)
  }
  const Button3Foo = () => {
    console.log('stupid btn')
  }

  return (
    <div>
      <Button
        name={'My Youtube chanel 1'}
        callBack={() => Button1Foo('111', 21)}
      />
      <Button
        name={'My Youtube chanel 2'}
        callBack={() => Button2Foo('222')}
      />
      <Button name={'Stupid'} callBack={Button3Foo}/>
    </div>
  )
}