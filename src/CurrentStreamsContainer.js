import React from 'react';
import StreamCardList from './StreamCardList';
import CurrentStream from './CurrentStream';

class CurrentStreamsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenChannel: null
    };
  }

  handleSelectedStream = (stream) => {
    this.setState({chosenChannel: stream});
  }

  render() {
    return (
      <div>
        <StreamCardList
          currentStreams={this.props.current_streams}
          handleSelectedStream={this.handleSelectedStream}
        />
        <CurrentStream channel={this.state.chosenChannel} />
      </div>
    )
  }
}

export default CurrentStreamsContainer;
