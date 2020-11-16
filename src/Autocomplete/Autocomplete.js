import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Autocomplete extends Component {
    constructor(props) {
        super(props);
        this.state = {
          activeSuggestion: 0,
          filteredSuggestions: [],
          showSuggestions: false,
          userInput: ''
        };
      }
  static propTypes = {};

  render() {
    return <div>Hello from AutoComplete</div>;
  }
}
export default Autocomplete;