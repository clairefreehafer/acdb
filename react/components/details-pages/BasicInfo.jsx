import React, { Component } from 'react';

export default class BasicInfo extends Component {
  constructor (props) {
    super();
  }

  render () {
    const item = this.props;

    return (
      <div>
        <Row>
          {/***** IMAGE *****/}
          <Col sm={3}>
            <Thumbnail className="content-thumbnail" src="images/sprites/hhd/items/blue-bed.png" />
          </Col>
          <Col sm={9}>
            <Row>
              {/***** SET *****/}
              <Col sm={12}>
                <h4 className="set">{item.set}</h4>
              </Col>
            </Row>
            <Row>
              {/***** PURCHASE PRICE *****/}
              <Col sm={6}>
                <h5>purchase price</h5>
                <img src="images/sprites/nl/items/small-bells.png" /> {item.purchasePrice}
              </Col>
              <Col sm={6}>
                <h5>&nbsp;</h5>
                <OverlayTrigger placement="top" overlay={bellBoom}>
                  <img src="images/sprites/nl/items/big-bells.png" />
                </OverlayTrigger>
                  &nbsp;{item.purchasePrice + item.purchasePrice * 0.2 }
              </Col>
            </Row>
            <Row>
              {/***** RESALE VALUE *****/}
              <Col sm={6}>
                <h5>resale value</h5>
                <img src="images/sprites/nl/items/small-bells.png" /> {item.resaleValue}
              </Col>
              <Col sm={6}>
                <h5>&nbsp;</h5>
                <OverlayTrigger placement="top" overlay={bellBoom}>
                  <img src="images/sprites/nl/items/big-bells.png" />
                </OverlayTrigger>
                &nbsp;{item.resaleValue + item.resaleValue * 0.2}
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          {/***** OBTAINED FROM *****/}
          <Col sm={12}>
            <strong>obtained from</strong> <img src="images/sprites/nl/map/timmyandtommy.gif" /> {item.obtainedFrom}
          </Col>
        </Row>
      </div>
    )
  }
}
