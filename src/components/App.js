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
  console.log(myArr);
  

  return (
    <div className="portfolio">
      <Header />
      <Total />
      
      {myArr.map(({ id, type, name, amount, total }) => {
        return (
        <Asset 
        id={id}
        type={type}
        name={name}
        amount={amount}
        total={total}
        // yield={yield}
        />
        );
        })} 
     
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
