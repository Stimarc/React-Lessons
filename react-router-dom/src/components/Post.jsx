import React from 'react';
import { Link } from 'react-router-dom';

export const Post = ({ data }) => {
    const { id, title, text } = data;
    return (
        <div className="post">
            <Link to={`${id}`}>
                <h3 className="post__title">{title}</h3>
                <p className="post__text">{text}</p>
            </Link>

        </div>
    );
};
