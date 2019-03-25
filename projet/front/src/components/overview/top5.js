import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <ListGroup>
          <h1>TOP 5</h1>
        <ListGroupItem>1. Djadja</ListGroupItem>
        <ListGroupItem>2. </ListGroupItem>
        <ListGroupItem>3. </ListGroupItem>
        <ListGroupItem>4. </ListGroupItem>
        <ListGroupItem>5. </ListGroupItem>
      </ListGroup>
    );
  }
}