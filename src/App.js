import React from 'react';
import axios from 'axios';
import './App.css';
import Navbar from "react-bootstrap/navbar";
import SearchForm from './SearchForm';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  handleBrowseSubmit = (params) => {
    axios.get("http://localhost:3030/api/search_current_streams", {
      params: {
        game: params.game, viewer_min: params.viewerMin, viewer_max: params.viewerMax
      }
    }).then(function (response) {
      const data = response.data;
      console.log(response.data);
    }).catch(function (error) {
      console.log("ERROR " + error);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar className="bg-light justify-content-between">
            <Navbar.Brand href="#home">Twitch Stream Syndicate</Navbar.Brand>
            <SearchForm handleBrowseSubmit={this.handleBrowseSubmit} />
          </Navbar>
        </header>
      </div>
    );
  }
}

export default App;
