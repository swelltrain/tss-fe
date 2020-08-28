import React from 'react';
import Card from 'react-bootstrap/card';
import Button from 'react-bootstrap/button';

class StreamCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbnailUrl: props.thumbnailUrl,
      title: props.title,
      streamerName: props.streamerName,
      gameName: props.gameName
    };
  }

  handleClick = (e) => {
    const channel = e.target.getAttribute("data-channel");
    this.props.handleSelectedStream(channel);
    e.preventDefault(); //probably not necessary but good practice?
  }

  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img
          variant="top"
          src={this.state.thumbnailUrl}
          onClick={this.handleClick}
          data-channel={this.props.channel}
        />
        <Card.Body>
          <Card.Title>{this.state.streamerName}</Card.Title>
          <Card.Text>
            {this.state.title}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default StreamCard;
