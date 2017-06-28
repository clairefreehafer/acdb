import React from 'react';
import { Button, Col, Grid, Thumbnail, OverlayTrigger, PageHeader, Panel, Row, Tab, Tabs, Tooltip } from 'react-bootstrap';

import GameSelect from '../GameSelect';
import Customization from './Customization';

const obtainedFrom = (
  <Tooltip>jeremiah</Tooltip>
);

export default function (props) {
  return (
    <div>
      <PageHeader>
        blue bed
      </PageHeader>

      <GameSelect />

      <Panel>
        <Row>
          <Col sm={3}>
            <Thumbnail className="details-thumbnail" src="images/sprites/hhd/items/blue-bed.png" />
          </Col>
          <Col sm={9}>
            <Row>
              <Col sm={6}>
                <h5>unlocked by</h5>
                <OverlayTrigger placement="bottom" overlay={obtainedFrom}>
                  <img src="images/sprites/hhd/chars/jeremiah.png" />
                </OverlayTrigger>
              </Col>
              <Col sm={6}>
                <h5>furniture type</h5>
                home items<br />furniture<br />beds
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <h4>properties</h4>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <h5>color</h5>
            <Button bsSize="xsmall" id="blue">blue</Button>
            <Button bsSize="xsmall" id="yellow">yellow</Button>
          </Col>
          <Col sm={4}>
            <h5>size</h5>
            <Button bsStyle="info" bsSize="xsmall" disabled>&nbsp;&nbsp;&nbsp;</Button>
            <Button bsStyle="info" bsSize="xsmall" disabled>&nbsp;&nbsp;&nbsp;</Button>

          </Col>
          <Col sm={4}>
            <h5>interaction</h5>
            can be laid on by one
          </Col>
        </Row>

        <Customization />
        {/* don't need fees or sapphire icon */}

      </Panel>
    </div>
  )
}
