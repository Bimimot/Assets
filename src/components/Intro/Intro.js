import React from 'react';
import icon from '../../images/intro-icon.png';


function Intro() {
    return (

        <div className="intro">
            <img className="intro__icon" src={icon}
                alt="intro-icon" />
        </div>

    );
}

export default Intro;