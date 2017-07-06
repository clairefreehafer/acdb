import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { Col, ListGroup, ListGroupItem, PageHeader, Row, Thumbnail } from 'react-bootstrap';

import FurnitureDetailsNL from '../details-pages/furniture/FurnitureDetailsNL';

import { fetchFurniture } from './listUtils';

export default class Furniture extends Component {
  constructor (props) {
    super();

    this.state = {
      filter: null,
      furniture: []
    }
  }

  componentWillMount () {
    fetchFurniture(1)
      .then(res => this.setState({ furniture: res.data }))
      .catch(console.error);
  }

  render () {
    return (
      <div>
        <PageHeader>furniture</PageHeader>
        <ListGroup>
          {this.state.furniture.map(item => {
            return (
              <ListGroupItem key={item.id}>
              <Row>
                  <Col sm={3}>
                    <Thumbnail src={item.image[0].url} />
                  </Col>
                  <Col sm={9}>
                    <h5><Link to={`/furniture/${item.id}`}>{item.record}</Link></h5>
                  </Col>
                </Row>
              </ListGroupItem>
            )
          })}
        </ListGroup>
      </div>
    );
  }
}
