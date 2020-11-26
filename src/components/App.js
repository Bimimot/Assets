import React from 'react';
// import './App.scss';

import { assetsRow } from './Api/Api';

import Header from './Header/Header';
import Total from './Total/Total';
import Asset from './Asset/Asset';

function App() {
  const assetsArr = assetsRow.assets;
  return (
    <div className="portfolio">
      <Header />
      <Total />
      <Asset id="2" name="Polymetal" amount="1" total ="500" yield="2%"/>
    {/* 
    - получаем массив данных методом api
    - Рисуем блок total
    - перебираем массив по типу бумаги и рисуем блоки Бондс
    */}
    </div>
  );
}

export default App;
