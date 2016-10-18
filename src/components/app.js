import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import Info from '../containers/info';

export default class App extends Component {
  render() {
    return (
      <div>
      	<SearchBar />
      	<Info />
      </div>
    );
  }
}
