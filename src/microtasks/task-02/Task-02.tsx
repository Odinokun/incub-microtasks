import React, {FC} from 'react';

type PropsType = {};

export const Task02: FC<PropsType> = (props) => {
  const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
  ]

  return (
    <table>
      {
        topCars.map((c, index) => {
          return (
            <tr key={index}>
              <td>{index + 1} </td>
              <td>{c.manufacturer} </td>
              <td>{c.model}</td>
            </tr>
           )
        })
      }
    </table>
  )
}