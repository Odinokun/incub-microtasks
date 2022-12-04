import React, {FC} from 'react';

type PropsType = {
  name: string
  callBack: () => void
};

export const Button: FC<PropsType> = (props) => {
  const onClickBtnHandler = () => {
    props.callBack();
  }

  return (
    <button onClick={onClickBtnHandler}>{props.name}</button>
  )
}