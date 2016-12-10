import React, { Component } from 'react';
import Select from 'react-select';
import Language from './Language';
import {languages} from './Data';
import R from 'ramda';
import languageFilter from './LanguageFilter';

import './App.css';
import 'react-select/dist/react-select.css';
import 'react-toolbox/components/commons.scss';

const searchableProperties = ['name', 'paradigms', 'features'];

const options = R.compose(
  R.uniq,
  R.map(value => ({ value, label: value })),
  R.flatten,
  R.map(R.compose(R.values, R.pick(searchableProperties)))
)(languages);

const filterLanguages = languageFilter(languages, searchableProperties);

class App extends Component {
  constructor() {
    super();
    this.state = {queries: [], languages};
  }

  handleSelectChange(queries) {
    this.setState({queries});
    this.setState({languages: filterLanguages(queries)});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Programming language sieve</h2>
        </div>
        <Select className="App-search" multi value={this.state.queries} onChange={this.handleSelectChange.bind(this)} options={options}/>
        <div className="search-results">
          {
            this.state.languages.map((language, index) => <Language key={index} {...language}/>)
          }
        </div>
      </div>
    );
  }
}

export default App;
