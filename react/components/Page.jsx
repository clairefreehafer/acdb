import React from 'react';

import Navigation from './Navigation';
import Content from './Content';

import { Col } from 'react-bootstrap';

export default function Page (props) {
	return (
		<div>
			<Navigation />
			<Col lg={6} lgOffset={3} md={8} mdOffset={2} sm={8} smOffset={2}>
				<Content />
			</Col>
		</div>
	)
}
