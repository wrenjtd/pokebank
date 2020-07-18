import React from 'react';
import { Link } from 'react-router-dom';

const HeaderComponent: React.FC = () => {
    return (
        <header className = "header_container">
            <h1 className="header_logo_font">PokeBank</h1>
            <div className="header_links">
            <Link to="/ndex"><span>National</span></Link>
            <Link to="/rdex"><span>Regional</span></Link>
            <Link to="/myaccount"><span>Account</span></Link>
            <Link to="/login"><span>Logout</span></Link>
            </div>
            <hr></hr>
        </header>
    )
}

export default HeaderComponent;