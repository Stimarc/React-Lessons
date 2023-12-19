import { Route, Routes } from 'react-router-dom'; 
import { Layout } from './components';
import { 
  AboutPage, 
  ContactsPage, 
  HomePage, 
  NotFoundPage, 
  PostsPage,
  SinglePostPage, 
} from './pages';

const App = () => {
  const posts = [
    { id: 1, title: 'Post 1 title', text: 'Post 1 Text' },
    { id: 2, title: 'Post 2 title', text: 'Post 2 Text' },
    { id: 3, title: 'Post 3 title', text: 'Post 3 Text' },
    { id: 4, title: 'Post 4 title', text: 'Post 4 Text' },
  ];

  return (
    <div className="container full-height">
      <Routes>

        <Route path="/" element={ <Layout /> } >

          <Route index element={ <HomePage /> } />

          <Route path="posts" element={ <PostsPage data={ posts }/> } />
          <Route path="posts/:id" element={ <SinglePostPage data={ posts }/> } />
          <Route path="contacts" element={ <ContactsPage /> } />
          <Route path="about" element={ <AboutPage /> } />

          <Route path="*" element={ <NotFoundPage /> } />

        </Route>
        
      </Routes>
    </div>
  );
}

export default App;