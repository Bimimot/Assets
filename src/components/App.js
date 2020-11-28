import React from 'react';

import { api } from '../utils/Api';
import { data } from '../utils/Data';



import Header from './Header/Header';
import Total from './Total/Total';
import Intro from './Intro/Intro';
import Asset from './Asset/Asset';

const startArr = api.getDataAssets().assets; // получаем данные 
const myArr = data.makeArr(startArr); // строим свой массив для портфеля
const total = data.countPortfolio(startArr);


function App() {
  return (
    <>
      <Header />
      <Total total={total}/>
      <Intro />
      {myArr.map(function (item, i, arr) {
        return (
          <Asset item={item}/>
        );
      })}
    </>
  );
}

export default App;
