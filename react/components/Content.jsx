import React from 'react';

import { Col, Grid, Nav, NavItem, PageHeader, Panel, Row, Tab, Tabs } from 'react-bootstrap';

export default function (props) {
  return (
    <div>
      <PageHeader>blue bed <small>reorderable</small></PageHeader>
      <Tab.Container id="game-select" defaultActiveKey="nl">
        <Row>
          <Col md={12}>
          <Nav bsStyle="pills">
            <NavItem eventKey="pg">population growing</NavItem>
            <NavItem eventKey="ww">wild world</NavItem>
            <NavItem eventKey="cf">city folk</NavItem>
            <NavItem eventKey="nl">new leaf</NavItem>
            <NavItem eventKey="hhd">happy home designer</NavItem>
          </Nav>
          </Col>
        </Row>
      </Tab.Container>
      <Panel>
        <Grid>
          <Row>
            <Col md={3}>image</Col>
            <Col md={5}>
              <Row><strong>blue series</strong></Row>
              <Row><strong>purchase price:</strong> 2,100 bells</Row>
              <Row><strong>resale value:</strong> 525 bells</Row>
              <Row><strong>obtained from:</strong> Timmy & Tommy</Row>
            </Col>
          </Row>
          <Row>
            <Col md={7}>
              <Row><strong>HHA theme(s):</strong> rustic</Row>
              <Row><strong>style:</strong> basic</Row>
              <Row><strong>color(s):</strong> blue, yellow</Row>
            </Col>
            <Col md={1}>2x1</Col>
          </Row>
        </Grid>
      </Panel>
    </div>
  )
}
