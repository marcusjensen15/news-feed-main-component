import React from 'react';
import logo from './logo.svg';
import './App.css';

//Components

import NewsFeedMain from './components/NewsFeedMain';
import NewsFeedSideBar from './components/NewsFeedSideBar';

function App() {
  return (
    <div className="App">
      <NewsFeedMain/>
      <NewsFeedSideBar/>
    </div>
  );
}

export default App;
