import React, {ChangeEvent, FC} from 'react';

type PropsType = {
  title: string
  setTitle: (val: string) => void
};

export const Input: FC<PropsType> = (props) => {
  const onInputChangeHandler = (e: ChangeEvent<HTMLInputElement> ) => {
    props.setTitle(e.currentTarget.value)
  }

  return (
    <input value={props.title}
           onChange={onInputChangeHandler}
    />
  )
}