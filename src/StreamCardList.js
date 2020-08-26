import React from 'react';
import StreamCard from './StreamCard';
import ListGroup from 'react-bootstrap/ListGroup';

function StreamCardList(props) {
  const current_streams = props.current_streams;
  const items = current_streams.map((item, index) =>
    <ListGroup.Item key={index.toString()}>
      <StreamCard
        thumbnail_url={item.thumbnail_url}
        title={item.title}
        streamer_name={item.display_name}
        game_name={item.game_name}
        handle_selected_stream={props.handle_selected_stream}
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
