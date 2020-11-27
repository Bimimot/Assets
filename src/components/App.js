import React from 'react';
// import './App.scss';

import { api } from '../utils/Api';
import { data } from '../utils/Data';

import './App.scss';

import Header from './Header/Header';
import Total from './Total/Total';
import Asset from './Asset/Asset';

const startArr = api.getDataAssets().assets; // получаем данные 
const myArr = data.makeArr(startArr); // строим свой массив для портфеля

function App() {
  return (
    <div className="portfolio">
      <Header />
      <Total />

      {myArr.map(function (item, i, arr) {
        return (
          <Asset
            id={item.id}
            type={(i === 0 || (i > 0 && arr[i].type !== arr[i - 1].type)) ? item.type : ''}
            icon={item.icon}
            name={item.name}
            amount={item.amount}
            total={item.total}
          // yield={yield}
          />
        );
      })}


    </div>
  );
}

export default App;
