import React from 'react';
import icon from '../../images/intro-icon.png';

class Intro extends React.Component {
    render() {
        return (
            <div className="intro">
                <img className="intro__icon" src={icon}
                    alt="intro-icon" />
            </div>

        )
    }
}


export default Intro;