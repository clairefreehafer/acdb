import React from 'react';
import { Route } from 'react-router-dom';

import Navigation from './Navigation';
import Landing from './Landing';
import Content from './Content';

export default function App (props) {
  console.log(props)
  return (
    <div id="app">
      <Navigation />
      <Route exact path="/" component={Landing} />
      <Route path="/test" component={Content} />
    </div>
  );
}
