import { useEffect , useState } from 'react';


const App = () => {
  const [post, setPost] = useState({});
  const [postId, setPostId] = useState(1);
  const [inputData, setInputData] = useState(1);
  const [comments,setComments] =useState([]);


  useEffect(() => {

    (async () => {
      console.log('useEffect');
      const postRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${ postId }`);
      const post =await postRes.json();
       setPost(post);

       const commentsRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${ postId }/comments`);
       const comments = await commentsRes.json();
       setComments(comments);

       
    })()
    

  }, [postId])

  

 

  return (
    <div className="App">
      <h1>Use Effect</h1>
      <button onClick={() => setPostId(inputData)}>Load post( {String(inputData) })</button>
      <input onChange={ e => setInputData(e.target.value)} type="number" placeholder='enter post id' />

      <div className="post">
        <h1 className='title'>{post.title}</h1>
        <p className='text'>${post.body }</p>
      </div>

      <div className="comments">
        {
          comments.length
          ?

          comments.map(({name,email,body}) => (
            <div className="comments">
              <h4>{name}</h4>
              <p>{email}</p>
              <p>{body}</p>
            </div>
          ))
          :
          <p>Loading comments...</p>
        }
      </div>
    </div>
  );
}

export default App;

