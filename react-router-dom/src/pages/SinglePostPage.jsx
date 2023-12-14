import React from 'react';
import { useParams } from 'react-router-dom';

export const SinglePostPage = ({data}) => {
const {id} =useParams();
const post = data.find(item => item.id === Number(id));
const title = post ? post.title : '';
const text = post ? post.text : '';


    return (
        <div>
          <h1>Single Post Page</h1>  

          {
            post
              ? <div className="single-post">
                <div className="single-post__title">{title}</div>
                <div className="single-post__text">{text}</div>
                </div>
              : <p>Post it's not found !!!</p>
          }

          

        </div>
    );
};
