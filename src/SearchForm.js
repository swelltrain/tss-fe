import React from 'react'
import axios from 'axios'

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: "",
      viewerMin: "",
      viewerMax: ""
    };
  }

  handleOnChange = (event) => {
    const target = event.target;
    const name = target.name;

    this.setState({[name]: target.value});
  }

  handleSubmit = (event) => {
    const game = this.state.game;
    const viewerMin = this.state.viewerMin;
    const viewerMax = this.state.viewerMax;

    axios.get("http://localhost:3030/api/search_current_streams", {
      params: {
        game: game, viewer_min: viewerMin, viewer_max: viewerMax
      }
    }).then(function (response) {
      const data = response.data;
      console.log(response.data);
    }).catch(function (error) {
      console.log("ERROR " + error);
    })
    event.preventDefault();
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit} >
        <label>
          Game
          <input type="text" value={this.state.game} name="game" onChange={this.handleOnChange}/>
        </label>
        <label>
          Viewer Min
          <input type="text" value={this.state.viewerMin} name="viewerMin" onChange={this.handleOnChange}/>
        </label>
        <label>
          Viewer Max
          <input type="text" value={this.state.viewerMax} name="viewerMax" onChange={this.handleOnChange}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SearchForm;
