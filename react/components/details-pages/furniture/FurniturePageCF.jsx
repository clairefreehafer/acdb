import React from 'react';
import { Button, Col, Grid, Thumbnail, OverlayTrigger, PageHeader, Panel, Row, Tab, Tabs, Tooltip } from 'react-bootstrap';

import GameSelect from '../GameSelect';
import Customization from './Customization';

const reorderable = (
  <Tooltip>reorderable</Tooltip>
);

const bellBoom = (
  <Tooltip>with bell boom ordinance</Tooltip>
);

export default function (props) {
  return (
    <div>
      <PageHeader>
        blue bed&nbsp;
        <OverlayTrigger placement="bottom" overlay={reorderable}>
          <img src="images/sprites/nl/items/red-present-unopened.png" />
        </OverlayTrigger>
      </PageHeader>

      <GameSelect />

      <Panel>
        <Row>
          <Col sm={3}>
            <Thumbnail className="details-thumbnail" src="images/sprites/hhd/items/blue-bed.png" />
          </Col>
          <Col sm={9}>
            <Row>
              <Col sm={12}>
                <h4 className="set">blue series</h4>
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <h5>purchase price</h5>
                <img src="images/sprites/nl/items/small-bells.png" /> 2,100
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <h5>resale value</h5>
                <img src="images/sprites/nl/items/small-bells.png" /> 525
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <strong>obtained from</strong> Crazy Redd
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <h4>properties</h4>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <h5><strong>genre</strong></h5>
            <Button bsSize="xsmall">trendy</Button>
            <Button bsSize="xsmall">dignified</Button>
          </Col>
          <Col sm={4}>
            <h5>color(s)</h5>
            <Button bsSize="xsmall" id="blue">blue</Button>
            <Button bsSize="xsmall" id="yellow">yellow</Button>
          </Col>
          <Col sm={4}>
            <h5>size</h5>
            <Button bsStyle="info" bsSize="xsmall" disabled>&nbsp;&nbsp;&nbsp;</Button>
            <Button bsStyle="info" bsSize="xsmall" disabled>&nbsp;&nbsp;&nbsp;</Button>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <h5>furniture type</h5>
            bed
          </Col>
          <Col sm={4}>
            <h5>interaction</h5>
            can be laid on by one
          </Col>
        </Row>
      </Panel>
    </div>
  )
}
