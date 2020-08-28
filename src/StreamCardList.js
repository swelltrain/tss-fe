import React from 'react';
import StreamCard from './StreamCard';
import ListGroup from 'react-bootstrap/ListGroup';

function StreamCardList(props) {
  const currentStreams = props.currentStreams;
  const items = currentStreams.map((item, index) =>
    <ListGroup.Item key={index.toString()}>
      <StreamCard
        thumbnailUrl={item.attributes.thumbnail_url}
        title={item.attributes.title}
        streamerName={item.attributes.display_name}
        gameName={item.attributes.game_name}
        handleSelectedStream={props.handleSelectedStream}
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
