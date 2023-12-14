import React from 'react';
import { Post } from '../components';

export const PostsPage = ({ data }) => {
    return (
        <div>
            <h1>Posts page</h1>

            <div className="posts">
                <h2 className='posts__title'>Posts</h2>

                { data.map(post => <Post key={Number} data={post}/>) }

            </div>
        </div>
    );
};

