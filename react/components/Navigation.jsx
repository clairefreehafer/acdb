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
      <Navbar.Collapse>
        <Nav>
          {/* games */}
          <NavDropdown eventKey={1} title="games">
            <LinkContainer to="#">
              <NavItem eventKey={1.1}>new leaf</NavItem>
            </LinkContainer>
            <LinkContainer to="#">
              <NavItem eventKey={1.2}>happy home designer</NavItem>
            </LinkContainer>
            <LinkContainer to="#">
              <NavItem eventKey={1.3}>city folk</NavItem>
            </LinkContainer>
            <LinkContainer to="#">
              <NavItem eventKey={1.4}>wild world</NavItem>
            </LinkContainer>
            <LinkContainer to="#">
              <NavItem eventKey={1.5}>population growing</NavItem>
            </LinkContainer>
          </NavDropdown>

          {/* home items */}
          <NavDropdown eventKey={2} title="home items">
            <LinkContainer to="/furniture">
              <NavItem eventKey={2.1}>furniture</NavItem>
            </LinkContainer>
            <LinkContainer to="#">
              <NavItem eventKey={2.2}>carpet</NavItem>
            </LinkContainer>
            <LinkContainer to="#">
              <NavItem eventKey={2.3}>wallpaper</NavItem>
            </LinkContainer>
            <LinkContainer to="#">
              <NavItem eventKey={2.4}>siding</NavItem>
            </LinkContainer>
            <LinkContainer to="#">
              <NavItem eventKey={2.5}>doors</NavItem>
            </LinkContainer>
            <LinkContainer to="#">
              <NavItem eventKey={2.6}>roofs</NavItem>
            </LinkContainer>
            <LinkContainer to="#">
              <NavItem eventKey={2.7}>fences</NavItem>
            </LinkContainer>
          </NavDropdown>

          {/* clothing */}
          <NavDropdown eventKey={3} title="clothing">
            <LinkContainer to="#">
              <NavItem eventKey={3.1}>tops</NavItem>
            </LinkContainer>
            <LinkContainer to="#">
              <NavItem eventKey={3.2}>bottoms</NavItem>
            </LinkContainer>
            <LinkContainer to="#">
              <NavItem eventKey={3.3}>dresses</NavItem>
            </LinkContainer>
            <LinkContainer to="#">
              <NavItem eventKey={3.4}>headgear</NavItem>
            </LinkContainer>
            <LinkContainer to="#">
              <NavItem eventKey={3.5}>accessories</NavItem>
            </LinkContainer>
            <LinkContainer to="#">
              <NavItem eventKey={3.6}>socks</NavItem>
            </LinkContainer>
            <LinkContainer to="#">
              <NavItem eventKey={3.7}>shoes</NavItem>
            </LinkContainer>
          </NavDropdown>

          {/* museum */}
          <NavDropdown eventKey={4} title="museum">
            <LinkContainer to="#">
              <NavItem eventKey={4.1}>art</NavItem>
            </LinkContainer>
            <LinkContainer to="#">
              <NavItem eventKey={4.2}>fossils</NavItem>
            </LinkContainer>
            <LinkContainer to="#">
              <NavItem eventKey={4.3}>fish</NavItem>
            </LinkContainer>
            <LinkContainer to="#">
              <NavItem eventKey={4.4}>insects</NavItem>
            </LinkContainer>
          </NavDropdown>

          {/* equipment */}
          <NavDropdown eventKey={5} title="equipment">
            <LinkContainer to="#">
              <NavItem eventKey={5.1}>umbrellas</NavItem>
            </LinkContainer>
            <LinkContainer to="#">
              <NavItem eventKey={5.2}>tools</NavItem>
            </LinkContainer>
            <LinkContainer to="#">
              <NavItem eventKey={5.3}>stationary</NavItem>
            </LinkContainer>
          </NavDropdown>

          {/* nature */}
          <NavDropdown eventKey={6} title="nature">
            <LinkContainer to="#">
              <NavItem eventKey={6.1}>fruit</NavItem>
            </LinkContainer>
            <LinkContainer to="#">
              <NavItem eventKey={6.2}>flowers</NavItem>
            </LinkContainer>
            <LinkContainer to="#">
              <NavItem eventKey={6.3}>trees & bushes</NavItem>
            </LinkContainer>
            <LinkContainer to="#">
              <NavItem eventKey={6.4}>mushrooms</NavItem>
            </LinkContainer>
            <LinkContainer to="#">
              <NavItem eventKey={6.5}>ore</NavItem>
            </LinkContainer>
            <LinkContainer to="#">
              <NavItem eventKey={6.6}>seashells</NavItem>
            </LinkContainer>
          </NavDropdown>

          {/* collectables */}
          <NavDropdown eventKey={7} title="collectables">
            <LinkContainer to="#">
              <NavItem eventKey={7.1}>music</NavItem>
            </LinkContainer>
            <LinkContainer to="#">
              <NavItem eventKey={7.2}>gyroids</NavItem>
            </LinkContainer>
            <LinkContainer to="#">
              <NavItem eventKey={7.3}>balloons</NavItem>
            </LinkContainer>
            <LinkContainer to="#">
              <NavItem eventKey={7.3}>pinwheels</NavItem>
            </LinkContainer>
            <LinkContainer to="#">
              <NavItem eventKey={7.3}>ice cream</NavItem>
            </LinkContainer>
            <LinkContainer to="#">
              <NavItem eventKey={7.3}>miscellaneous</NavItem>
            </LinkContainer>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
