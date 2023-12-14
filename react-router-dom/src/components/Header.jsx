import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
    const checkActive = ({ isActive }) => {
        return isActive ? 'menu-item__link menu-item__link_active' : 'menu-item__link'
    }
    return (
        <header className='header'>
            <nav>
                <ul className="menu-list">
                    <li className="menu-item">
                        <NavLink className={checkActive} to="/">Home</NavLink ></li>
                    <li className="menu-item">
                        <NavLink className={checkActive} to="/posts">Posts</NavLink >
                    </li>
                    <li className="menu-item">
                        <NavLink className={checkActive} to="/contacts">Contacts</NavLink >
                    </li>
                    <li className="menu-item">
                        <NavLink className={checkActive} to="/about">About</NavLink >
                    </li>
                </ul>
            </nav>
        </header>
    );
};
