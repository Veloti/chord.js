import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper middle-gray" style={{ padding: '0 0'}}>
                <NavLink to="/" className="brand-logo center">Chord.js</NavLink>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><NavLink to="/login">Sign in</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
