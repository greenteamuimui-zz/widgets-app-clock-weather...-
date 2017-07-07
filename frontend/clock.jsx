import React from 'react';

class Clock extends React.Component {
  constructor () {
    super();
    this.state = {
      time: new Date()
    };
  }

  tick() {
    this.setState({time: new Date()});
  }

  componentDidMount(){
    const handle = setInterval(() => this.tick(), 1000);
    this.state.handle = handle;
  }

  componentWillUnmount(){
    clearInterval(this.state.handle);
    this.state.handle = 0;
  }

  render () {
    return (
      <div>
          <h1>Delay NoMore</h1>
          <div>{this.state.time.toTimeString()}</div>
      </div>
    );
  }

}

export default Clock;
