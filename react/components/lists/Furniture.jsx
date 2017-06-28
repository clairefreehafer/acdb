import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, ListGroup, ListGroupItem, PageHeader, Row, Thumbnail } from 'react-bootstrap';

export default class Furniture extends Component {
  constructor (props) {
    super();

    this.state = {
      filter: null
    }
  }

  render () {
    return (
      <div>
        <PageHeader>furniture</PageHeader>
        <ListGroup>
          <ListGroupItem>
          <Row>
              <Col sm={3}>
                <Thumbnail src="images/sprites/hhd/items/blue-bed.png" />
              </Col>
              <Col sm={9}>
                <h5>blue bed</h5>
              </Col>
            </Row>
          </ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}
