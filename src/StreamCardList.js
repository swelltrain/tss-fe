import React from 'react';
import StreamCard from './StreamCard';
import ListGroup from 'react-bootstrap/ListGroup';

function StreamCardList(props) {
  const streams = props.streams;

  const items = streams.map((item) =>
    <ListGroup.Item>
      <StreamCard
        thumbnail_url={item.thumbnail_url}
        title={item.title}
        streamer_name={item.display_name}
        game_name={item.game_name}
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
