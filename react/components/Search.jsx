import React from 'react';
import { Button, ControlLabel, Form, FormControl, FormGroup, Panel } from 'react-bootstrap';

let formGroupStyle = {
  width: '100%'
};

let controlLabelStyle = {
  width: '30%',
  paddingRight: '10px',
  textAlign: 'right'
};

let buttonStyle = {
  marginLeft: '10px'
};

export default class Search extends React.Component {
  constructor(props) {
    super();

    this.state = {
      advancedSearch: false
    };

    this.toggleAdvancedSearch = this.toggleAdvancedSearch.bind(this);
  }

  toggleAdvancedSearch () {
    if (this.state.advancedSearch) {
      this.setState({ advancedSearch: false });
    } else {
      this.setState( { advancedSearch: true });
    }
  }

  render() {
    return (
      <div id="search">
        <Form inline>
          <FormGroup controlId="search" bsSize="sm" style={formGroupStyle}>
            {/* <ControlLabel style={controlLabelStyle}>search</ControlLabel> */}

            <FormControl type="text" placeholder="" />

            <Button type="submit" bsSize="sm" style={buttonStyle}>search</Button>

            <small id="advanced-search-toggle" onClick={this.toggleAdvancedSearch}>
              {this.state.advancedSearch ?
                <span>collapse</span>
                : <span>advanced search</span>
              }
            </small>
            <div id="advanced-search-panel">
              <Panel collapsible expanded={this.state.advancedSearch}>test</Panel>
            </div>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
