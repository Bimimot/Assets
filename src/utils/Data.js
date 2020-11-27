class Data {

    makeArr(arr) {
        this.arr = arr;
        this.sortArr(this.arr);
        const assetsArr = this.arr.map((item) => {
            return ({
                id: item.data.id,
                type: item.data.type,
                icon: 'https://divplan.com/media/icons/' + item.data.companyCode + '.png',
                name: item.data.name,
                amount: item.amount,
                total: item.amount * item.data.prices.RUB,
                yield: !!item.data.yield ? item.data.yield : 'N/A'
            })
        })
        return assetsArr;
    }

    sortArr() {
        this.arr.sort((a, b) => a.data.type > b.data.type);
    }

}

const data = new Data
export { data };

