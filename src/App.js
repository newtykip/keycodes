// imports
import React, { Component } from 'react'

// components
import Card from './components/Card';

// keylocations
const keyLocations = {
  0: 'General keys',
  1: 'Left-side modifier keys',
  2: 'Right-side modifier keys',
  3: 'Numpad',
};

export default class App extends Component {
  constructor() {
    super();

    // setup the state
    this.state = {
      key: null,
      location: null,
      locationFriendly: null,
      which: null,
      code: null
    };
  }

  // methods
  handleKeydown = e => {
    // if it is not a meta key, prevent the default action
    if (!e.metaKey) e.preventDefault();

    // get information about the key
    const key = e.keyCode;
    const location = e.location;
    const locationFriendly = keyLocations[location];
    const which = e.which;
    const code = e.code;

    // update the state
    return this.setState({
      key,
      location,
      locationFriendly,
      which,
      code
    });
  }

  componentDidMount() {
    return document.querySelector('body').addEventListener('keydown', this.handleKeydown);
  }

  render() {
    // destructuring
    const { key, location, locationFriendly, which, code } = this.state;

    // jsx
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

        <div class="social">
          <a href="https://github.com/jsmiith/calculator" className="fa fa-github"></a>
        </div>
      </div>
    );
  }
}