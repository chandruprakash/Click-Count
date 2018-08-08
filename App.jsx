import React from "react";

class App extends React.Component {
  render() {
    return <div>Test</div>;
  }
}

class SecondExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
  }

  handleClick() {
    this.setState(prevState => ({
      clicks: prevState.clicks + 1
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick.bind(this)}>
        Clicked {this.state.clicks} Times
      </button>
    );
  }
}

export { App, SecondExample };
