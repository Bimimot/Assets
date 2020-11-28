import React from 'react';

class Total extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="total">
                <h2 className="total total__title">Annual total</h2>
                <div className="total__table">
                    <div className="total__price">{this.props.total.totalPrice}&#8381;</div>
                    <div className="total__yield">{this.props.total.totalYield}</div>
                </div>
            </div>
        )
    }
}

export default Total;