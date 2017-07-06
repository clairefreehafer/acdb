import React from 'react';
import { Button, Col, Grid, Thumbnail, OverlayTrigger, PageHeader, Panel, Row, Tab, Tabs, Tooltip } from 'react-bootstrap';
import axios from 'axios';

import GameSelect from '../GameSelect';
import Customization from './Customization';

export default class FurnitureDetailsNL extends React.Component {
  constructor (props) {
    super();

    this.state = {
      item: {}
    }
  }

  componentWillMount () {
    console.log('test')
    axios.get(`/api/furniture/${this.props.match.params.id}`)
      .then(res => this.setState({ item: res.data.fields }))
      .catch(console.error)
  }

  render () {
    // this.props.match.params.id
    console.log(this.state)
    return (
      <div>
        test
      </div>
    )
  }
}
