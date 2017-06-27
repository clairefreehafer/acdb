import React, { Component } from 'react';

import { Col, Row, Table } from 'react-bootstrap';

export default class Customization extends Component {
  constructor (props) {
    super();

    this.state = {
      showImages: false
    };
  }

  render () {
    return (
      <div>
        <Row>
          <Col md={8}>
            <h4>customization</h4>
          </Col>
        </Row>

        <Row>
          <Col md={8}>
            <Table responsive condensed>
              <thead>
                <tr>
                  <th>feature</th>
                  <th>original</th>
                  <th>options</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>wood color</td>
                  <td>blue</td>
                  <td>
                    light blue<br />
                    dark blue<br />
                    sapphire<br />
                  </td>
                </tr>
                <tr>
                  <td>bedding</td>
                  <td>yellow</td>
                  <td>???</td>
                </tr>
              </tbody>
            </Table>

            {/* costs */}
            <Col md={6}>
              <h5>fee to change <img src="../public/sprites/nl/items/customized-leaf.png" /></h5>
              <img src="../public/sprites/nl/items/small-bells.png" /> 210
            </Col>

            <Col md={6}>
              <h5>fee to revert <img src="../public/sprites/nl/items/furniture-leaf.png" /></h5>
              <img src="../public/sprites/nl/items/small-bells.png" /> 105
            </Col>

          </Col>
        </Row>
      </div>
    )
  }
}
