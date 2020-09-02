import React from 'react';


class GetLocation extends React.Component {
  render() {
    return(
      <div className = "weather-app__ip-location" >
          <form onSubmit = {this.props.che}>
              <button className = "weather-app__ip-location-button">Get weathet by location</button>
          </form>
      </div>
      );
  }
}


export default GetLocation;
