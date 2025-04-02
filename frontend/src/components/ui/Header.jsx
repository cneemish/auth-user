import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

function Header({loggedInUser, handleLogout}){ 

    return (
        <header className="app-header">
            <div className="header-content">
                <div className="header-welcome">
                    <link to ="/home" className="header-Link home-link">Home</link>
                    {loggedInUser && <span> Welcome, {loggedInUser}</span>}
                </div>
                <nav className="header-nav">
{/*                     <link to = "/contact-us" className="header-link">Contact Us</link>
 */}                    {
                        loggedInUser&&(
                            <button onClick={handleLogout} className="header-logout-button">Logout</button>
                        )
                    }
                </nav>
            </div>
        </header>
    )

}

export default Header;