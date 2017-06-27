import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, IndexRedirect, Route } from 'react-router-dom';

import App from './components/App';

render(
  <BrowserRouter>
	  <Route path="/" component={App} />
  </BrowserRouter>,
  document.getElementById('root')
);

