import React, { Component } from 'react';

import { Button, Col, Row, Table } from 'react-bootstrap';

import CustomizedImages from './CustomizedImages';

export default class Customization extends Component {
  constructor (props) {
    super();

    this.state = {
      showImages: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal () {
    this.setState({
      showImages: true
    });
  }

  closeModal () {
    this.setState({
      showImages: false
    });
  }

  render () {
    return (
      <div>
        <Row>
          <Col sm={12}>
            <h4>customization</h4>
          </Col>
        </Row>

        <Row>
          <Col sm={4}>
            <Button onClick={this.openModal}>view pictures</Button>
          </Col>
          <Col sm={4}>
            <h5>fee to change</h5>
            <img src="images/sprites/nl/items/small-bells.png" /> 210
          </Col>

          <Col sm={4}>
            <h5>fee to revert</h5>
            <img src="images/sprites/nl/items/small-bells.png" /> 105
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
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
                    <img src="images/sprites/nl/items/sapphire.png" /> sapphire
                  </td>
                </tr>
                <tr>
                  <td>bedding</td>
                  <td>yellow</td>
                  <td>???</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <CustomizedImages
          showImages={this.state.showImages}
          handleClose={this.closeModal}
        />
      </div>
    )
  }
}
