import React from 'react';

import { Col, Modal, Row } from 'react-bootstrap';

export default function CustomizedImages (props) {
  return (
    <Modal show={props.showImages} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>blue bed customization</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="customizedItem">
          <img src="http://68.media.tumblr.com/f09b7843fe5d7bcfa8348da59d5891fe/tumblr_mxokv4OrlZ1sxhrifo1_400.jpg" />
          <div className="customizedText">
            <img src="images/sprites/nl/items/furniture-leaf.png" /><br />
            <strong>wood color:</strong> blue<br />
            <strong>bedding:</strong> yellow
          </div>
        </div>
        <div className="customizedItem">
          <img src="http://68.media.tumblr.com/8e3497bd42de24aca2a1157c571519cc/tumblr_mxokx6xyLE1sxhrifo1_400.jpg" />
          <div className="customizedText">
            <img src="images/sprites/nl/items/customized-leaf.png" /><br />
            <strong>wood color:</strong> light blue<br />
            <strong>bedding:</strong> pink<br />
          </div>
        </div>
        <div className="customizedItem">
          <img src="http://68.media.tumblr.com/fe306b2a04fa31ae25b039147844f37c/tumblr_mslam39fyd1sxhrifo1_400.jpg" />
          <div className="customizedText">
            <img src="images/sprites/nl/items/customized-leaf.png" /><br />
            <strong>wood color:</strong> dark blue<br />
            <strong>bedding:</strong> clothes fabric (retro dress)
          </div>
        </div>
        <div className="customizedItem">
          <img src="http://68.media.tumblr.com/3a66569af0888bb6bf6cee3b7af3db17/tumblr_mslaj9h6Zr1sxhrifo1_400.jpg" />
          <div className="customizedText">
            <img src="images/sprites/nl/items/customized-leaf.png" /><br />
            <strong>wood color: </strong>sapphire<br />
            <strong>bedding:</strong> clothes fabric (embroidered dress)
          </div>
        </div>
        <small>photos by <a href="http://customnewleaf.tumblr.com/">customized new leaf furniture</a></small>
      </Modal.Body>
    </Modal>
  )
}
