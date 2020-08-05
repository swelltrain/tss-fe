import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/button';
import Form from 'react-bootstrap/form';

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

  clearInputs = (event) => {
    this.setState({game: "", viewerMin: "", viewerMax: ""});
    event.preventDefault();
  }

  render () {
    return (
      <Form onSubmit={this.handleSubmit} inline >
        <Form.Group controlId="game">
          <Form.Label>Game</Form.Label>
          <Form.Control type="text" value={this.state.game} name="game" onChange={this.handleOnChange}/>
        </Form.Group>
        <Form.Group controlId="viewerMin">
          <Form.Label>Viewer Min</Form.Label>
          <Form.Control type="text" value={this.state.viewerMin} name="viewerMin" onChange={this.handleOnChange}/>
        </Form.Group>
        <Form.Group controlId="viewerMax">
          <Form.Label>Viewer Max</Form.Label>
          <Form.Control type="text" value={this.state.viewerMax} name="viewerMax" onChange={this.handleOnChange}/>
        </Form.Group>

        <Button variant="primary">Submit</Button>
        <Button variant="secondary" onClick={this.clearInputs}>Clear</Button>
      </Form>
    );
  }
}

export default SearchForm;
