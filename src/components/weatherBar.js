import React from 'react';


class WeatherBar extends React.Component {
  render() {
    return (
      <div className="weather-app__answer-field">
        {this.props.city &&
          <div>
            <div className="weather-app__answer-field-item">Place: {this.props.city}, {this.props.country}</div>
            <div className="weather-app__answer-field-item">Temperature: {this.props.temp} ℃</div>
            <div className="weather-app__answer-field-item">Clouds: {this.props.cloudness}%</div>
            <div className="weather-app__answer-field-item">Wind: {this.props.wind} m/s</div>
          </div>
        }
      </div>
    );
  }
}


export default WeatherBar;
