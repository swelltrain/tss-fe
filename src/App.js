import React from 'react';
import axios from 'axios';
import './App.css';
import Navbar from "react-bootstrap/navbar";
import SearchForm from './SearchForm';
import CurrentStreamsContainer from './CurrentStreamsContainer';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_streams: []
    };
  }

  handleBrowseSubmit = (params) => {
    axios.get("http://localhost:3030/api/search_current_streams", {
      params: {
        game: params.game, viewer_min: params.viewerMin, viewer_max: params.viewerMax
      }
    }).then((response) => {
      const data = response.data;
      this.setState({current_streams: data})
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
        <CurrentStreamsContainer current_streams={this.state.current_streams} />
      </div>
    );
  }
}

export default App;
