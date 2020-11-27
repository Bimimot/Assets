class Data {

    makeArr(arr) {
        this.arr = arr;
        this.sortArr(this.arr);
        const assetsArr = this.arr.map((item) => {
            return ({
                id: item.data.id,
                type: item.data.type,
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
        return (!!item.data.yield ? item.data.yield.toFixed(2) + '%' : 'N/A')
    }


}

const data = new Data
export { data };

