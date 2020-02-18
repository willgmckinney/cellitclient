import React from 'react';
import './App.css';
import { Pane } from 'evergreen-ui';
import Navbar from './components/navbar/Navbar';
import Store from './components/store/Store';
import Auth from './components/auth/Auth';

function App() {
  console.log('hi');
  return (
    <Pane className='App'>
      <Navbar />
      <Auth />
      <Pane className='App-header'>
        <h1>Cell/it!</h1>
        <p>*Anatomically Needed*</p>
      </Pane>
      <Store />
    </Pane>
  );
}

export default App;
