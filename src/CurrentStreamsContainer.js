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
          current_streams={this.props.current_streams}
          handle_selected_stream={this.handleSelectedStream}
        />
        <CurrentStream channel={this.state.chosenChannel} />
      </div>
    )
  }
}

export default CurrentStreamsContainer;
