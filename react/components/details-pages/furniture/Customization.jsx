import React, { Component } from 'react';
import axios from 'axios';

import { Button, Col, Row, Table } from 'react-bootstrap';

import CustomizedImages from './CustomizedImages';

export default class Customization extends Component {
  constructor (props) {
    super();

    this.state = {
      customization: {},
      showImages: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount () {
    axios.get(`/api/furniture/customization/${this.props.id}`)
      .then(res => (this.setState({ customization: res.data.fields })))
      .catch(console.error)
  }

  renderOptions (options) {
    if (options !== 'n/a') {
      let optionsArray = options.split(', ');
      return (
        <td>
          {optionsArray.map(option => (
            <div key={option}>{option}</div>
          ))}
        </td>
      )
    } else return null;
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
    console.log(this.state.customization)
    let customization = this.state.customization;

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
            <img src="/images/sprites/nl/items/small-bells.png" />&nbsp;
            {customization['Fee to Change'] ? <span>{customization['Fee to Change']}</span>
            : <span>unknown</span>}
          </Col>

          <Col sm={4}>
            <h5>fee to revert</h5>
            <img src="/images/sprites/nl/items/small-bells.png" />&nbsp;
            {customization['Fee to Revert'] ? <span>{customization['Fee to Revert']}</span>
            : <span>unknown</span>}
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
              {/* first customization */}
                <tr>
                  {/* feature */}
                  <td>{customization['Feature 1']}</td>
                  {/* oritional */}
                  <td>{customization['Original 1']}</td>
                  {/* options */}
                  {customization['Options 1'] ? this.renderOptions(customization['Options 1'])
                : null}
                </tr>

                {/* second customization */}
                {customization['Feature 2'] ?
                  <tr>
                    {/* feature */}
                    <td>{customization['Feature 2']}</td>
                    {/* oritional */}
                    <td>{customization['Original 2']}</td>
                    {/* options */}
                    {this.renderOptions(customization['Options 2'])}
                  </tr>
                : null}
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
