import React from 'react';

class Data {
    constructor(arr, api) {
        this.arr = arr;
        this.api = api;
    }

    makeArr() {
        console.log(this.arr);
        //this.sortArr();
        
        this.arr.sort((a, b) => a.data.type > b.data.type); // sort by type
        const assetsArr = this.arr.map((item) => {
            return ({
                id: item.data.id,
                type: item.data.type,
                icon: this.api.getIcon(item.data.companyCode),
                name: item.data.name,
                amount: item.amount,
                total: item.amount * item.data.prices.RUB,
                yield: !!item.data.yield ? item.data.yield : 'N/A'
                
            })
        })
        return assetsArr;
    }



}

// function Data(arr) {
    
//     arr.sort((a, b) => a.data.type > b.data.type); // sort by type
    
//     const assetsArr = arr.map(function (item, i, arr) {
//         const icon = 'https://divplan.com/media/icons/' + item.data.companyCode + '.png';
//         if (item.data) {
//             return ({
//                 id: item.data.id,
//                 type: item.data.type,
//                 icon: icon,
//                 name: item.data.name,
//                 amount: item.amount,
//                 total: item.amount * item.data.prices.RUB,
//                 yield: !!item.data.yield ? item.data.yield : 'N/A'
//             })
//         }
//     })
    

//     return assetsArr;    
// }

export default Data;

// если при запросе иконки ответ статус 200 и заголовок Content-Type=image/png, то сохраняем ссылку на иконку.