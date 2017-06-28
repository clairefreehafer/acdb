import React from 'react';
import { Link } from 'react-router-dom';
import { Panel } from 'react-bootstrap';

export default function Landing (props) {
  return (
    <div id="landing">
      <Panel header={<h2>welcome to the animal crossing database</h2>}>
        currently, this is an exercise in web development. visit the <a href="https://www.github.com/clairefreehafer/acdb">github repo</a> to learn a bit more about the project.
        <h4>sample pages</h4>
        <Link to="/furniture">list of furniture</Link><br />
        <Link to="/blue-bed-nl">furniture page (new leaf)</Link><br />
        <Link to="/blue-bed-hhd">furniture page (happy home designer)</Link><br />
        <Link to="/blue-wall-nl">wallpaper page (new leaf)</Link>
      </Panel>
    </div>
  );
}
