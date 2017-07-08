import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Weather from './weather';

class Root extends React.Component {
  render () {
    return(
      <div>
        <p>hello</p>
        <Clock/>
        <Weather/>
      </div>);
  }
}


document.addEventListener("DOMContentLoaded", () => {
	const main = document.getElementById("main");
	ReactDOM.render(<Root/>, main);


});
