import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Furniture from './Furniture';
import FurnitureDetailsNL from '../details-pages/furniture/FurnitureDetailsNL';

export default class FurnitureContainer extends Component {
  constructor (props) {
    super();
  }

  render () {
    return (
      <div>
        {/* list of furniture */}
        <Route exact path="/furniture" component={Furniture} />
        {/* individual furniture */}
        <Route exact path="/furniture/:id" component={FurnitureDetailsNL} />
      </div>
    )
  }
}
