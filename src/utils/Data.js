class Data {

    makeArr(arr) {
        this.arr = arr;
        this.sortArr(this.arr);
        const assetsArr = this.arr.map((item, i, arr) => {
            return ({
                id: item.data.id,
                type: this.setType(item, i, arr),
                icon: this.makeIcon(item),
                name: item.data.name,
                amount: this.makeAmount(item),
                total: this.countTotal(item),
                yield: this.makeYield(item)
            })
        })
        return assetsArr;
    }

    countPortfolio(arr) {
        let totalPrice = this.countTotalPrice(arr);
        let totalYield = this.countTotalYield(arr); // получаем абсолютную доходность
        console.log(totalYield);
        totalYield = (totalYield / totalPrice).toFixed(2) + '%'; //получаем относительную доходность
        totalPrice = Math.floor(totalPrice).toLocaleString('RU');
        return ({ totalPrice: totalPrice, totalYield: totalYield })
    }

    countTotalPrice(arr) {
        return arr.reduce(function (sumPrice, item) {
            return sumPrice + item.amount * item.data.prices.RUB;
        }, 0);
    }

    countTotalYield(arr) {
        return arr.reduce(function (sumYield, item) {
            let curYield = (!!item.data.yield) ? item.data.yield : 0;
            return sumYield + item.amount * item.data.prices.RUB * curYield; //возвращаем абсолютную доходность
        }, 0);
    }

    sortArr() {
        this.arr.sort(function (a, b) {
            return a.data.type < b.data.type ? -1 : 1;
        });
    }

    makeIcon(item) {
        return ('https://divplan.com/media/icons/' + item.data.companyCode + '.png')
    }

    makeAmount(item) {
        return item.amount.toLocaleString('RU')
    }

    countTotal(item) {
        return Math.floor(item.amount * item.data.prices.RUB).toLocaleString('RU')
    }

    makeYield(item) {
        return (!!item.data.yield ? item.data.yield.toFixed(1) + '%' : 'N/A')
    }

    setType(item, i, arr) {
        let type = ((i === 0 || (i > 0 && arr[i].data.type !== arr[i - 1].data.type)) ? item.data.type : '');
        switch (type) {
            case 'BOND': type = 'Bonds'; break;
            case 'STOCK': type = 'Stocks'; break;
            case 'ETF': type = 'ETFs'; break;
            case 'CURRENCY': type = 'Currencies'; break;
        }
        return type;
    }

}

const data = new Data
export { data };

