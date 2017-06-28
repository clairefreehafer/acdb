import React, { Component } from 'react';
import { Button, Col, Grid, Thumbnail, OverlayTrigger, PageHeader, Panel, Row, Tab, Tabs, Tooltip } from 'react-bootstrap';

import GameSelect from '../GameSelect';

const reorderable = (
  <Tooltip>reorderable</Tooltip>
);

const bellBoom = (
  <Tooltip>with bell boom ordinance</Tooltip>
);

export default class WallpaperDetailsNL extends Component {
  constructor (props) {
    super();

    this.state = {
      name: 'blue wall',
      image: {},
      reorderable: true,
      purchasePrice: 1260, // probably will be a string...
      resaleValue: 315, // ^
      obtainedFrom: 'Timmy & Tommy',
      set: 'blue series',
      hhaTheme: ['none'],
      style: 'basic',
      color: ['blue']
    }
  }

  render () {
    const item = this.state;

    return (
      <div>
      {/***** NAME AND REORDERABLE *****/}
        <PageHeader>
          {item.name}&nbsp;
          {
            item.reorderable ?
              <OverlayTrigger placement="bottom" overlay={reorderable}>
                <img src="images/sprites/nl/items/red-present-unopened.png" />
              </OverlayTrigger>
            :
              null
          }
        </PageHeader>

        <GameSelect />

        <Panel>
          <Row>
           {/***** IMAGE *****/}
            <Col sm={3}>
              <Thumbnail className="content-thumbnail" src="images/sprites/hhd/items/blue-bed.png" />
            </Col>
            <Col sm={9}>
              <Row>
                {/***** SET *****/}
                <Col sm={12}>
                  <h4 className="set">{item.set}</h4>
                </Col>
              </Row>
              <Row>
                {/***** PURCHASE PRICE *****/}
                <Col sm={6}>
                  <h5>purchase price</h5>
                  <img src="images/sprites/nl/items/small-bells.png" /> {item.purchasePrice}
                </Col>
                <Col sm={6}>
                  <h5>&nbsp;</h5>
                  <OverlayTrigger placement="top" overlay={bellBoom}>
                    <img src="images/sprites/nl/items/big-bells.png" />
                  </OverlayTrigger>
                    &nbsp;{item.purchasePrice + item.purchasePrice * 0.2 }
                </Col>
              </Row>
              <Row>
                {/***** RESALE VALUE *****/}
                <Col sm={6}>
                  <h5>resale value</h5>
                  <img src="images/sprites/nl/items/small-bells.png" /> {item.resaleValue}
                </Col>
                <Col sm={6}>
                  <h5>&nbsp;</h5>
                  <OverlayTrigger placement="top" overlay={bellBoom}>
                    <img src="images/sprites/nl/items/big-bells.png" />
                  </OverlayTrigger>
                  &nbsp;{item.resaleValue + item.resaleValue * 0.2}
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            {/***** OBTAINED FROM *****/}
            <Col sm={12}>
              <strong>obtained from</strong> <img src="images/sprites/nl/map/timmyandtommy.gif" /> {item.obtainedFrom}
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <h4>properties</h4>
            </Col>
          </Row>
          <Row>
            {/***** HHA THEME *****/}
            <Col sm={4}>
              <h5><strong>HHA theme(s)</strong></h5>
              {
                item.hhaTheme.map(theme => (
                  <Button
                    bsSize="xsmall"
                    id={theme}
                    key={theme}
                  >
                    {theme}
                  </Button>
                ))
              }
            </Col>
            {/***** STYLE *****/}
            <Col sm={4}>
              <h5>style</h5>
              <Button bsSize="xsmall" id={item.style}>{item.style}</Button>
            </Col>
            {/***** COLOR *****/}
            <Col sm={4}>
              <h5>color(s)</h5>
              {
                item.color.map(color => (
                  <Button
                    bsSize="xsmall"
                    id={color}
                    key={color}
                  >
                    {color}
                  </Button>
                ))
              }
            </Col>
          </Row>
        </Panel>
      </div>
    )
  }
}
