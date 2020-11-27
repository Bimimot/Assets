import React from 'react';

function Asset(props) {
    return (
        <>
        {(props.type !== '')
            ? (<h3>{props.type}</h3>) : (<></>)
            }
        <div className="asset">
            
            <img className="asset__icon" src="" alt="asset-icon" />            
            <span className="asset__type">{props.type + '  '}</span>
            <span className="asset__name">{props.name + '  '}</span>
            <span className="asset__amount">{props.amount + '  '}</span>
            <span className="asset__total">{props.total + '  '}</span>
            {/* <span className="asset asset__yield">{props.yield + '  '}</span> */}
             
            </div>
        </>    
    )
}

export default Asset;