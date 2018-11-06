import React from 'react';
import Nav from '../components/Navigation'
import './Pages.css'

const Error = () => {
    return (
        <div className='Page'>
            <h1>404 - Page not found</h1>
            <Nav />
        </div>
    );
}

export default Error;