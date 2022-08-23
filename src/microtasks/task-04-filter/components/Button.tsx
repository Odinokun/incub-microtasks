import React, {FC} from 'react';

type PropsType = {
  name: string
  callBack:()=>void
};

export const Button: FC<PropsType> = (props) => {
  return (
    <button onClick={props.callBack}>{props.name}</button>
  )
}