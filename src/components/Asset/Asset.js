import React from 'react';

class Asset extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                {(this.props.item.type !== '')
                    ? (<h3>{this.props.item.type}</h3>) : (<></>)
                } 
                <div className="asset">
                    <img className="asset__icon" src={this.props.item.icon}
                        onError={(e) => { e.target.src = "https://divplan.com/static/img/default_icon.png" }}
                        alt="asset-icon" />
                    <span className="asset__name">{this.props.item.name}</span>
                    <span className="asset__amount">{this.props.item.amount}</span>
                    <span className="asset__total">{this.props.item.total}&#8381;</span>
                    <span className="asset__yield">{this.props.item.yield}</span>

                </div>
            </>
        )        
    }

    // render() {
    //     return (
    //         <>
    //             {(this.props.type !== '')
    //                 ? (<h3>{this.props.type}</h3>) : (<></>)
    //             }
    //             <div className="asset">
    //                 <img className="asset__icon" src={this.props.icon}
    //                     onError={(e) => { e.target.src = "https://divplan.com/static/img/default_icon.png" }}
    //                     alt="asset-icon" />
    //                 <span className="asset__name">{this.props.name}</span>
    //                 <span className="asset__amount">{this.props.amount}</span>
    //                 <span className="asset__total">{this.props.total}&#8381;</span>
    //                 <span className="asset__yield">{this.props.yield}</span>

    //             </div>
    //         </>
    //     )
    // }
}

export default Asset;