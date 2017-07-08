import React from 'react';

class Weather extends React.Component {
  constructor () {
    super();
    this.state = {
      geo: {
      latitude:"",
      longitude:""
      },
      temp: "",
    };
    this.getWeather = this.getWeather.bind(this);
  }


  getWeather () {
    let that = this;
    console.log("hi");
    let xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.openweathermap.org/data/2.5/weather?lat=${Math.floor(this.state.latitude)}&lon=${Math.floor(this.state.longtitude)}&appid=437747921efed27de21ab36ed43ead45`, true);

    xhr.onload = function() {
      let obj = JSON.parse(xhr.responseText);
      console.log(obj);
      let tempdata = obj.main.temp;
      that.setState({temp: Math.floor((tempdata - 273))});
    };

    xhr.send();
  }

  componentWillMount(){
    navigator.geolocation.getCurrentPosition(
      function success(pos) {
      this.setState({
        geo: {latitude: pos.coords.latitude, longitude: pos.coords.longitude}
      });
      this.getWeather();
    }.bind(this));

    // console.log("requesting info");
  }



  render () {
    return (
      <div>
        <h1>Weather now?</h1>
        <div className="weather">
          <h2 className="items">San Francisco</h2>
          <div className="items">{this.state.temp} degree C</div>
        </div>
      </div>

    );
  }


}

export default Weather;
