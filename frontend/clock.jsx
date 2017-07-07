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
      <div className="clock">
          <h1>Delay NoMore</h1>
        <div className="items">
          <h2 className="labels">Date:</h2>
          <div className="display">{this.state.time.toDateString()}</div>
        </div>
        <div className="items">
          <h2 className="labels">Time:</h2>
          <div className="display">{this.state.time.toTimeString()}</div>
        </div>
      </div>
    );
  }

}

export default Clock;
