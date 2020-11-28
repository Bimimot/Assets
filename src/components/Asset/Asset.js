import React from 'react';

class Asset extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="asset">
                {(this.props.item.type !== '')
                    ? (<h3 className="asset__title">{this.props.item.type}</h3>) : (<></>)
                }
                <div className="asset__grid">
                    <img className="asset__icon" src={this.props.item.icon}
                        onError={(e) => { e.target.src = "https://divplan.com/static/img/default_icon.png" }}
                        alt="asset-icon" />
                    <span className="asset__name">{this.props.item.name}</span>
                    <span className="asset__amount">{this.props.item.amount}</span>
                    <span className="asset__total">{this.props.item.total}&#8381;</span>
                    <span className="asset__yield">{this.props.item.yield}</span>

                </div>
            </div>
        )
    }
}

export default Asset;