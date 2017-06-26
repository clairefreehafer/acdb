import React from 'react';

import Navigation from './Navigation';
import Content from './Content';

import { Col } from 'react-bootstrap';

export default function Page (props) {
	return (
		<div>
			<Navigation />
			<Col sm={8} smOffset={2}>
				<Content />
			</Col>
		</div>
	)
}
