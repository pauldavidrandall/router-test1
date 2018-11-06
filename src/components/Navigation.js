import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav>
            <NavLink to="/">Home </NavLink>
            <NavLink to="/about">About </NavLink>
            <NavLink to="/contact">Contact </NavLink>
        </nav>
    );
}

export default Navigation;