import React, { Component } from 'react';

import Furniture from './Furniture';
import FurnitureDetailsNL from '../details-pages/furniture/FurniturePagesNL';

export default class FurnitureContainer extends Component {
  constructor (props) {
    super();
  }

  render () {
    return (
      <div>
        <Route exact path="/" component={Furniture} />
        <Route path="/:id" component={FurnitureDetailsNL} />
      </div>
    )
  }
}
