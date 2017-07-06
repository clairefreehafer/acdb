import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Furniture from './Furniture';
import FurnitureDetailsNL from '../details-pages/furniture/FurnitureDetailsNL';

export default class FurnitureContainer extends Component {
  constructor (props) {
    super();
  }

  render () {
    console.log('poop',this.props)
    return (
      <div>
        {/* list of furniture */}
        <Route exact path="/" component={Furniture} />
        {/* individual furniture */}
        <Route path="/:id" component={FurnitureDetailsNL} />
      </div>
    )
  }
}
