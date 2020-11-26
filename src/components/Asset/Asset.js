import React from 'react';

function Asset(props) {
    return (
        <div className="asset">
            <img className="icon" />
            <span className="asset asset__name">{props.name + '  '}</span>
            <span className="asset asset__amount">{props.amount + '  '}</span>
            <span className="asset asset__total">{props.total + '  '}</span>
            <span className="asset asset__yield">{props.yield + '  '}</span>
             
        </div>            
    )
}

export default Asset;