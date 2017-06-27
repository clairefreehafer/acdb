import React from 'react';
import { Button, Col, Grid, Thumbnail, OverlayTrigger, PageHeader, Panel, Row, Tab, Tabs, Tooltip } from 'react-bootstrap';

import GameSelect from './GameSelect';
import Customization from './Customization';

const reorderable = (
  <Tooltip>reorderable</Tooltip>
);
export default function (props) {
  return (
    <div>
      <PageHeader>
        blue bed&nbsp;
        <OverlayTrigger placement="bottom" overlay={reorderable}>
          <img src="../public/sprites/nl/items/red-present-unopened.png" />
        </OverlayTrigger>
      </PageHeader>

      <GameSelect />

      <Panel>
        <Grid>
          <Row>
            <Col md={3}><Thumbnail src="../public/sprites/hhd/items/blue-bed.png" /></Col>
            <Col md={5}>
              <Row><h4 className="set">blue series</h4></Row>
              <Row><strong>purchase price</strong> <img src="../public/sprites/nl/items/small-bells.png" /> 2,100</Row>
              <Row><strong>resale value</strong> <img src="../public/sprites/nl/items/small-bells.png" /> 525</Row>
              <Row><strong>obtained from</strong> <img src="../public/sprites/nl/map/timmyandtommy.gif" /> Timmy & Tommy</Row>
            </Col>
          </Row>
          <Row>
          <Col md={8}>
            <h4>properties</h4>
          </Col>
          </Row>
          <Row>
            <Col md={2}>
              <h5><strong>HHA theme(s)</strong></h5>
              <Button bsSize="xsmall">rustic</Button>
            </Col>
            <Col md={2}>
              <h5>style</h5>
              <Button bsSize="xsmall">basic</Button>
            </Col>
            <Col md={2}>
              <h5>color(s)</h5>
              <Button bsSize="xsmall" className="blue">blue</Button>
              <Button bsSize="xsmall" className="yellow">yellow</Button>
            </Col>
            <Col md={2}>
              <h5>size</h5>
              2x1
            </Col>
          </Row>

          <Customization />
        </Grid>
      </Panel>
    </div>
  )
}
