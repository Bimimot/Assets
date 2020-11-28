import React from 'react';

class Total extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="total">
                <h2 className="total total__title">Annual total</h2>
                <div className="total total__table">
                    <span className="total__price">{this.props.total.totalPrice}&#8381;</span>
                    <span className="total__yield">{this.props.total.totalYield}</span>
                </div>
            </div>
        )
    }
}

export default Total;