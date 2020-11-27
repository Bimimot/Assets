import React from 'react';

class Total extends React.Component {
    render() {
        return (
            <div className="total">
                <h2 className="total total__title">Annual total</h2>
                <div className="total total__table">
                    <span>100 000</span>
                    <span>5.5%</span>
                </div>
            </div>
        )
    }
}

export default Total;