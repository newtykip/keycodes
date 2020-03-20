import React, { Component } from 'react'
import Card from './components/Card';

// friendly key locations
const KEY_LOCATIONS = {
  0: 'General keys',
  1: 'Left-side modifier keys',
  2: 'Right-side modifier keys',
  3: 'Numpad',
};

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      key: null,
      location: null,
      locationFriendly: null,
      which: null,
      code: null
    };
  }


  componentDidMount() {
    return document.onkeypress = e => {
      // if it is not a meta key, prevent the default action
      if (!e.metaKey) e.preventDefault();

      // get information about the key
      const key = e.keyCode;
      const location = e.location;
      const locationFriendly = KEY_LOCATIONS[location];
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
    };
  }

  render() {
    // destructuring
    const { key, location, locationFriendly, which, code } = this.state;

    // jsx
    return (
      <div>
        <h1>{ key ? key : 'Please press a key!' }</h1>

        <div className="cards">
          <Card type="key" value={key} />
          <Card type="location" value={location} friendly={locationFriendly} />
          <Card type="which" value={which} />
          <Card type="code" value={code} />
        </div>

        <div class="social">
          <a href="https://github.com/itsnewt/keycodes" className="fa fa-github"></a>
        </div>
      </div>
    );
  }
}
