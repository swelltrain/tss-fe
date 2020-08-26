import React from 'react';
import StreamCardList from './StreamCardList';
import CurrentStream from './CurrentStream';

class CurrentStreamsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosen_stream: null
    };
  }

  handleSelectedStream = (e) => {
    const stream = e.target.value;
    console.log("is this thing on?  " + stream + " stream")

    this.setState({chosen_stream: stream});
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <StreamCardList
          current_streams={this.props.current_streams}
          handle_selected_stream={this.handleSelectedStream}
        />
        <CurrentStream channel={this.state.chosen_stream} />
      </div>
    )
  }
}

export default CurrentStreamsContainer;
