import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItem, Nav, NavDropdown, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function (props) {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">acdb</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Nav>
        <LinkContainer to="/furniture">
          <NavItem eventKey={1}>furniture</NavItem>
        </LinkContainer>
      </Nav>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavDropdown eventKey={2} title="quick links" id="quick-links">
            <MenuItem eventKey={2.1}>dummy link</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
