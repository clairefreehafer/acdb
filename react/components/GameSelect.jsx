import React from 'react';

import { Col, Nav, NavItem, Tab, Row } from 'react-bootstrap';

export default function GameSelect (props) {
	return (
		<div>
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
		</div>
	)
}
