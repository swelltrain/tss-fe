import React from 'react';
import './App.css';
import Navbar from "react-bootstrap/navbar";
import SearchForm from './SearchForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar className="bg-light justify-content-between">
          <Navbar.Brand href="#home">Twitch Stream Syndicate</Navbar.Brand>
          <SearchForm />
        </Navbar>
      </header>
    </div>
  );
}

export default App;
