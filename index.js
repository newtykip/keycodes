const KEY_LOCATIONS = {
  0: 'General keys',
  1: 'Left-side modifier keys',
  2: 'Right-side modifier keys',
  3: 'Numpad',
};

class Card extends React.Component {
    render() {
        // destructuring
        const { type, value, friendly } = this.props;

        // jsx
        return value || friendly ? (
            <div className={`card item-${type}`}>
                <div className="card-header">
                    event.{type}
                    { type === 'which' ? <a href="https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent" target="_blank" rel="noopener" className="deprecated-link">(deprecated)</a> : '' }
                </div>
                <div className="card-main">
                    <div className="main-description">{value} <span className="muted">{friendly}</span></div>
                </div>
            </div>
        ) : '';
    }
}

class App extends React.Component {
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
    return document.onkeydown = e => {
      // if it is not a meta key, prevent the default action
      if (!e.metaKey) e.preventDefault();

      // get information about the key
      const key = e.code;
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

        <div className="social">
          <a href="https://github.com/newtykins/keycodes" className="fa fa-github"></a>
        </div>
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('root'));