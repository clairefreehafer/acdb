import React from 'react';
import { Button, Col, Grid, Thumbnail, OverlayTrigger, PageHeader, Panel, Row, Tab, Tabs, Tooltip } from 'react-bootstrap';
import axios from 'axios';

import GameSelect from '../GameSelect';
import Customization from './Customization';

/* put in own file */
const reorderable = (
  <Tooltip>reorderable</Tooltip>
);

const bellBoom = (
  <Tooltip>with bell boom ordinance</Tooltip>
);
/* *************** */

export default class FurnitureDetailsNL extends React.Component {
  constructor (props) {
    super();

    this.state = {
      item: {}
    }
  }

  componentWillMount () {
    axios.get(`/api/furniture/${this.props.match.params.id}`)
      .then(res => this.setState({ item: res.data.fields }))
      .catch(console.error)
  }

  renderFurnitureSize (size) {

  }

  renderFurnitureType (info) {

  }

  renderFurnitureInteraction (info) {

  }

  renderCustomization (id) {
    if (id !== 'recFAP23T001F4nC3') {
      return <Customization id={id} />
    }
  }

  render () {
    let item = this.state.item;

    return (
      <div>
        <PageHeader>
          {item.Name}&nbsp;
          {this.state.item['Reorderable?'] ?
          <OverlayTrigger placement="bottom" overlay={reorderable}>
            <img src="/images/sprites/nl/items/red-present-unopened.png" />
          </OverlayTrigger>
          : null }
        </PageHeader>

        <GameSelect /> {/* pass down selected game as prop ? */}

        <Panel>
          <Row>
            {/* image */}
            <Col sm={3}>
              {item.Image ? <Thumbnail className="details-thumbnail" src={item.Image[0].url} />
              : null}
            </Col>

            <Col sm={9}>
              {/* set */}
              <Row>
                <Col sm={12}>
                  <h4 className="set">{item['Series/Set/Theme/Category']}</h4>
                </Col>
              </Row>

              <Row>
                {/* purchase price - need to account for alternate currency */}
                <Col sm={6}>
                  <h5>purchase price</h5>
                  <img src="/images/sprites/nl/items/small-bells.png" /> {item['Purchase Price']}
                </Col>

                {/* purchase price w/ bell boom
                  - need to account for alternate currency
                  - need to figure out how to math (state?)
                */}
                <Col sm={6}>
                  <h5>&nbsp;</h5>
                  <OverlayTrigger placement="top" overlay={bellBoom}>
                    <img src="/images/sprites/nl/items/big-bells.png" />
                  </OverlayTrigger>
                    &nbsp;purchase price x 4
                </Col>
              </Row>

              <Row>
                {/* resale value */}
                <Col sm={6}>
                  <h5>resale value</h5>
                  <img src="/images/sprites/nl/items/small-bells.png" /> {item['Resale Value']}
                </Col>

                {/* resale w/ bell boom - need to figure out math */}
                <Col sm={6}>
                  <h5>&nbsp;</h5>
                  <OverlayTrigger placement="top" overlay={bellBoom}>
                    <img src="/images/sprites/nl/items/big-bells.png" />
                  </OverlayTrigger>
                  &nbsp;resale value x 4
                </Col>
              </Row>
            </Col>
          </Row>

          {/* obtained from - need to figure out image */}
          <Row>
            <Col sm={12}>
              <strong>obtained from</strong> <img src="/images/sprites/nl/map/timmyandtommy.gif" /> {item['Obtained From']}
            </Col>
          </Row>

          <Row>
            <Col sm={12}>
              <h4>properties</h4>
            </Col>
          </Row>

          <Row>
            {/* hha theme */}
            <Col sm={3}>
              <h5><strong>HHA theme(s)</strong></h5>
              {item['HHA Theme'] ? item['HHA Theme'].map(theme => (
                <Button bsSize="xsmall" key={theme}>{theme}</Button>
              )) : null}
            </Col>

            {/* style */}
            <Col sm={3}>
              <h5>style</h5>
              <Button bsSize="xsmall">{item.Style}</Button>
            </Col>

            {/* colors */}
            <Col sm={3}>
              <h5>color(s)</h5>
              {item['Color(s)'] ? item['Color(s)'].map(color => (
                <Button bsSize="xsmall" key={color}>{color}</Button>
              )) : null}
            </Col>

            {/* size - need to figure out how to display (fn) */}
            <Col sm={3}>
              <h5>size</h5>
              <Button bsStyle="info" bsSize="xsmall" disabled>&nbsp;&nbsp;&nbsp;</Button>
              <Button bsStyle="info" bsSize="xsmall" disabled>&nbsp;&nbsp;&nbsp;</Button>

            </Col>
          </Row>
          <Row>
            {/* furniture type - fn */}
            <Col sm={3}>
              <h5>furniture type</h5>
              tbd
            </Col>

            {/* furniture interaction - fn */}
            <Col sm={3}>
              <h5>interaction</h5>
              tbd
            </Col>
          </Row>

          {/* customization - do not show panel if item is linked to 'none' customization */}
          {item.Customization ? this.renderCustomization(item.Customization[0]) : null}
        </Panel>
      </div>
    )
  }
}
