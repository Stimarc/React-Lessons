import  { useEffect, useState } from 'react';

export const useFetchPost = (postId) => {
    const[post,setPost] = useState({});
  
    useEffect(() => {
  
      (async () => {
        const res = await fetch (`https://jsonplaceholder.typicode.com/posts/${postId}`)
        const post = await res.json();
  
        setPost(post);
  
      })()
    },[]);
 

    return post;
}
