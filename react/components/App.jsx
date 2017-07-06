import React from 'react';
import { Route } from 'react-router-dom';
import { Col } from 'react-bootstrap';

import Navigation from './Navigation';
import Landing from './Landing';
import FurnitureContainer from './lists/FurnitureContainer';
import FurnitureDetailsNL from './details-pages/furniture/FurnitureDetailsNL';
import FurnitureDetailsHHD from './details-pages/furniture/FurnitureDetailsHHD';
import WallpaperDetailsNL from './details-pages/wallpaper/WallpaperDetailsNL';

export default function App (props) {
  return (
    <div id="app">
      <Navigation />
      <Col sm={10} smOffset={1} md={8} mdOffset={2} lg={6} lgOffset={3}>
        <Route exact path="/" component={Landing} />
        <Route path="/furniture" component={FurnitureContainer} />
        <Route path="/blue-bed-nl" component={FurnitureDetailsNL} />
        <Route path="/blue-bed-hhd" component={FurnitureDetailsHHD} />
        <Route path="/blue-wall-nl" component={WallpaperDetailsNL} />
		  </Col>
    </div>
  );
}
