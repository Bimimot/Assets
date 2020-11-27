class Data {

    makeArr(arr) {
        this.arr = arr;
        this.sortArr(this.arr);
        const assetsArr = this.arr.map((item, i, arr) => {
            return ({
                id: item.data.id,
                // type: item.data.type,
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

    sortArr() {
        this.arr.sort((a, b) => a.data.type > b.data.type);
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
        return ((i === 0 || (i > 0 && arr[i].data.type !== arr[i - 1].data.type)) ? item.data.type : '')
    }
    
    setIcon() {
//         const
// "https://divplan.com/static/img/default_icon.png"

    }

}

const data = new Data
export { data };

