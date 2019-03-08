import React, { Component } from 'react'
import './../scss/components/navbar.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import Logo from "./../assets/logo.png"

library.add(faBars, faUserCircle)

export default class NavBar extends Component {
    render() {
        return (
            <div className="nav-bar">
                <div className="container">
                    <div className="left-content">
                        <div className="icon-container">
                            <FontAwesomeIcon icon={faBars} className="icon" />
                        </div>
                        <div className="btn-container">
                            <button className="btn">Opportunities</button>
                        </div>
                        <div className="btn-container">
                            <button className="btn">Directory</button>
                        </div>
                    </div>
                    <div className="center-content">
                        <div className="logo-container">
                            <img className="logo" src={Logo} alt="logo" />
                        </div>
                    </div>
                    <div className="right-content">
                        <div className="btn-container submit-btn-container">
                            <button className="btn submit-btn">Submit a Company</button>
                        </div>
                        <div className="btn-container">
                            <button className="btn">Profile</button>
                        </div>
                        <div className="icon-container">
                            <FontAwesomeIcon icon={faUserCircle} className="icon profile-icon" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
