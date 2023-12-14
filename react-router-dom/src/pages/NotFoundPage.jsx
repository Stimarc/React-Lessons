import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
    return (
        <div>
            <h1>404. not found page !!!</h1>
            <Link to='/'>Home page</Link>
        </div>
    );
};
