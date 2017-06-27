import React from 'react';

import Navigation from './Navigation';
import Content from './Content';

import { Col } from 'react-bootstrap';

export default function Page (props) {
	return (
		<div>
			<Navigation />
			<Col sm={10} smOffset={1} md={8} mdOffset={2} lg={6} lgOffset={3}>
				<Content />
			</Col>
		</div>
	)
}
