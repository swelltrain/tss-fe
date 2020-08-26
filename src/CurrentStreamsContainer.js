import React from 'react';
import StreamCardList from './StreamCardList';
import CurrentStream from './CurrentStream';

class CurrentStreamsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosen_channel: null
    };
  }

  handleSelectedStream = (stream) => {
    console.log("is this thing on?  " + stream + " stream")

    this.setState({chosen_channel: stream});
  }

  render() {
    return (
      <div>
        <StreamCardList
          current_streams={this.props.current_streams}
          handle_selected_stream={this.handleSelectedStream}
        />
        <CurrentStream channel={this.state.chosen_channel} />
      </div>
    )
  }
}

export default CurrentStreamsContainer;
