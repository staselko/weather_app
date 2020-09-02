import React from 'react';


class Searching extends React.Component {
  render() {
    return(
      <div className = "weather-app__searching-field" >
        <form onSubmit = {this.props.weather} className = "weather-app__searching-form">
            <input placeholder = "City" name = "city" type = "text" className = "weather-app__searching-form-input" />
            <button>Get Weather</button>
        </form>
      </div>
      );
  }
}


export default Searching;
