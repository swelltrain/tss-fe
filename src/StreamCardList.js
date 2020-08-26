import React from 'react';
import StreamCard from './StreamCard';
import ListGroup from 'react-bootstrap/ListGroup';

function StreamCardList(props) {
  const current_streams = props.current_streams;
  const items = current_streams.map((item, index) =>
    <ListGroup.Item key={index.toString()}>
      <StreamCard
        thumbnail_url={item.attributes.thumbnail_url}
        title={item.attributes.title}
        streamer_name={item.attributes.display_name}
        game_name={item.attributes.game_name}
        handle_selected_stream={props.handle_selected_stream}
        channel={item.attributes.channel}
      />
    </ListGroup.Item>
  );

  return(
    <ListGroup horizontal>
      {items}
    </ListGroup>
  );
}

export default StreamCardList;
