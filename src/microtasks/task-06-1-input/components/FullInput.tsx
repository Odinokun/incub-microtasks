import React, {ChangeEvent, FC, useState} from 'react';

type PropsType = {
  addMessage: (val: string) => void
};

export const FullInput: FC<PropsType> = (props) => {
  const [title, setTitle] = useState<string>('');

  const onInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
  }

  const onBtnClickHandler = () => {
    props.addMessage(title)
    setTitle('')
  }

  return (
    <>
      <input value={title}
             onChange={onInputChangeHandler}
      />
      <button onClick={onBtnClickHandler}>Add message</button>
    </>
  )
}