import React from 'react';
import Form from '../src/components/Form/Form';
import PostList from '../src/components/PostsList/PostsList';
import Filter from '../src/components/Filter/FIlter';
import './App.css';

function App() {
  return (
    <div className="App">
      <Form />
      <Filter />
      <PostList />
    </div>
  );
}

export default App;
