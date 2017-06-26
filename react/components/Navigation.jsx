import React from 'react';

import { MenuItem, Nav, NavDropdown, Navbar } from 'react-bootstrap';

export default function (props) {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">acdb</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavDropdown eventKey={1} title="quick links" id="quick-links">
            <MenuItem eventKey={1.1}>new leaf</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
