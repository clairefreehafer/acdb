import React from 'react';
import { Route } from 'react-router-dom';
import { Col } from 'react-bootstrap';

import Navigation from './Navigation';
import Landing from './Landing';
import Furniture from './lists/Furniture';
import FurnitureDetails from './details-pages/furniture/FurnitureDetails';

export default function App (props) {
  console.log(props)
  return (
    <div id="app">
      <Navigation />
      <Col sm={10} smOffset={1} md={8} mdOffset={2} lg={6} lgOffset={3}>
        <Route exact path="/" component={Landing} />
        <Route path="/furniture" component={Furniture} />
        <Route path="/blue-bed" component={FurnitureDetails} />
		  </Col>
    </div>
  );
}
