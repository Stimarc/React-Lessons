import React from 'react';
import { Router, Route } from 'react-router-dom';
import { UserDetails, UserList } from './users';
import { TodoList } from './components';


const App = () => {
    return (
        <Router>
            <Route path="/" exact component={TodoList} />
            <Route path="/users" component={UserList} />
            <Route path="/user/:userId" component={UserDetails} />
        </Router>
    );

};

export default App;