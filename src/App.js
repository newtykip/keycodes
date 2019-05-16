import React, { Component } from 'react'
import './App.css';

import keyLocations from './keylocations'

import Card from './components/Card/Card'

class App extends Component {
  state = {
    key: null,
    location: null,
    locationFriendly: null,
    which: null,
    code: null
  };

  handleKeydown = e => {
    if (!e.metaKey) e.preventDefault();

    const key = e.keyCode;
    const location = e.location;
    const locationFriendly = keyLocations[location];
    const which = e.which;
    const code = e.code;

    console.log(location)

    this.setState({
      key,
      location,
      locationFriendly,
      which,
      code
    });

    console.log(this.state.location);
    console.log(this.state.locationFriendly)
  }

  componentDidMount() {
    const body = document.querySelector('body');

    body.addEventListener('keydown', this.handleKeydown);
  }

  render() {
    const { key, location, locationFriendly, which, code } = this.state;

    return (
      <div>
        { key ? (
          <h1>{ key }</h1>
        ) : (
          <div>
            <h3>Welcome to keycodes...</h3>
            <h2>Please press a key!</h2>
          </div>
        )}

        <div className="cards">
          <Card type="key" value={key} />
          <Card type="location" value={location} friendly={locationFriendly} />
          <Card type="which" value={which} />
          <Card type="code" value={code} />
        </div>
      </div>
    );
  }
}

export default App
