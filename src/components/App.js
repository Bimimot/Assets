import React from 'react';
// import './App.scss';

import {assetsRow} from '../utils/Api';
import Data from '../utils/Data';

import './App.scss';

import Header from './Header/Header';
import Total from './Total/Total';
import Asset from './Asset/Asset';

function App() {
  
  const startArr = assetsRow.assets;
  const myArr = Data(startArr);  

  return (
    <div className="portfolio">
      <Header />
      <Total />
      
      {myArr.map(function (item, i, arr) {
        return (
        <Asset 
        id={item.id}
        type={(i === 0 || (i>0 && arr[i].type !== arr[i-1].type)) ? item.type : ''}
        name={item.name}
        amount={item.amount}
        total={item.total}
        // yield={yield}
        />
        );
      })}
      
       

      
      {/* {myArr.map(({ item, i }) => {
        console.log(item, 'i=', i);
        return (
          <Asset
          // id={item.id}
          // type={item.type}
          // name={item.name}
          // amount={item.amount}
          // total={item.total}
          // yield={yield}
          />
        );
      })} 
 */}

      {/* <Asset id="2" name="Polymetal" amount="1" total ="500" yield="2%"/> */}
    {/* 
    - получаем массив данных методом api
    - Рисуем блок total
    - перебираем массив по типу бумаги и рисуем блоки Ассет - каждый со своим заголовком
    if myArr.type = 
    */}
    </div>
  );
}

export default App;
