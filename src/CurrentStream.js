import React from 'react';
import {TwitchPlayer, TwitchChat} from 'react-twitch-embed';


function CurrentStream(props) {
  if (!props.channel) {
    return null;
  }

  return(
    <div>
      <TwitchPlayer
        channel={props.channel}
        theme="dark"
        muted
      />
      <TwitchChat
        channel={props.channel}
      />
    </div>
  );
}

export default CurrentStream;
