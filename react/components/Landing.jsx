import React from 'react';

import { Panel } from 'react-bootstrap';

export default function Landing (props) {
  return (
    <div id="landing">
      <Panel header={<h3>welcome to the animal crossing database</h3>}>
        currently, this is an exercise in web development by <a href="https://www.github.com/clairefreehafer">claire freehafer</a>.
      </Panel>
    </div>
  );
}
