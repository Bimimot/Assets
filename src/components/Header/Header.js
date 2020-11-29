import React from 'react';
import logo from './images/logo.png';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <img className="header__logo" src={logo}
                    alt="logo" />
                <button className="header__btn-login">Log In</button>
            </div>

        )
    }
}


export default Header;