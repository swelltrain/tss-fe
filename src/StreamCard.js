import React from 'react';
import Card from 'react-bootstrap/card';
import Button from 'react-bootstrap/button';

class StreamCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbnail_url: props.thumbnail_url,
      title: props.title,
      streamer_name: props.streamer_name,
      game_name: props.game_name
    };
  }

  handleClick = (e) => {
    this.props.handle_selected_stream(e);
  }

  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.state.thumbnail_url} />
        <Card.Body>
          <Card.Title>{this.state.streamer_name}</Card.Title>
          <Card.Text>
            {this.state.title}
          </Card.Text>
          <Button variant="primary" onClick={this.handleClick}>View</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default StreamCard;
