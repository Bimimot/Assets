import React from 'react';

function Asset(props) {
    return (
        <>
        {(props.type !== '')
            ? (<h3>{props.type}</h3>) : (<></>)
            }
        <div className="asset">            
                <img className="asset__icon" src={props.icon + ''}
                    onError={(e) => {e.target.src = "https://divplan.com/static/img/default_icon.png" }}
                    alt="asset-icon" />            
            <span className="asset__name">{props.name}</span>
            <span className="asset__amount">{props.amount}</span>
                <span className="asset__total">{props.total}&#8381;</span>
            <span className="asset__yield">{props.yield}</span>
             
            </div>
        </>    
    )
}

export default Asset;