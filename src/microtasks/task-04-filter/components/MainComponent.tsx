import React, {FC} from 'react';
import {Button} from './Button';
import {FilterType, MoneyType} from '../Task04';

type PropsType = {
  currentMoney: Array<MoneyType>
  onClickHandler: (val: FilterType) => void
};

export const MainComponent: FC<PropsType> = (props) => {
  return (
    <>
      <Button name={'DOLLARS'} callBack={() => props.onClickHandler('dollar')}/>
      <Button name={'EUROS'} callBack={() => props.onClickHandler('euro')}/>
      <Button name={'ALL'} callBack={() => props.onClickHandler('all')}/>

      <ul>
        {props.currentMoney.map(obj => {
          return (
            <li key={obj.number}>
              <span>{obj.banknote} * </span>
              <span>{obj.value} * </span>
              <span>{obj.number}</span>
            </li>
          )
        })}
      </ul>
    </>
  )
}