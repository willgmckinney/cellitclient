import React from 'react';
import './App.css';
import { Pane } from 'evergreen-ui';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Store from './components/store/Store';
import Auth from './components/auth/Auth';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

function App() {
  console.log('hi');
  return (
    <Pane className='App'>
      
      {/* <Router/> */}
        <Navbar />
      {/* <Router/> */}
        {/* <Auth />
        <Pane className='App-header'>
          <h1>Cell/it!</h1>
          <p>*Anatomically Needed*</p>
        </Pane>
        <Store /> */}
      
      <Footer/>

    </Pane>
  );
}

export default App;
