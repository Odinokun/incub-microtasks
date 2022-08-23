import React, {FC, useState} from 'react';
import {MainComponent} from './components/MainComponent';

type PropsType = {};

export type FilterType = 'dollar' | 'euro' | 'all';

export type MoneyType = {
  banknote: string
  value: number
  number: string
}

export const Task04: FC<PropsType> = (props) => {

  const [money, setMoney] = useState<Array<MoneyType>>([
    {banknote: 'Dollar', value: 100, number: ' a1234567890'},
    {banknote: 'Dollar', value: 50, number: ' z1234567890'},
    {banknote: 'Euro', value: 100, number: ' w1234567890'},
    {banknote: 'Dollar', value: 100, number: ' e1234567890'},
    {banknote: 'Dollar', value: 50, number: ' c1234567890'},
    {banknote: 'Euro', value: 100, number: ' r1234567890'},
    {banknote: 'Dollar', value: 50, number: ' x1234567890'},
    {banknote: 'Euro', value: 50, number: ' v1234567890'},
  ])
  const [filter, setFilter] = useState<FilterType>('all');

  let currentMoney = money;
  if (filter === 'dollar') {
    currentMoney = money.filter(obj => obj.banknote === 'Dollar');
  } else if (filter === 'euro') {
    currentMoney = money.filter(obj => obj.banknote === 'Euro')
  }

  const onClickHandler = (val: FilterType) => {
    setFilter(val)
  }

  return (
    <MainComponent
      currentMoney={currentMoney}
      onClickHandler={onClickHandler}
    />
  )
}