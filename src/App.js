import React from 'react';
import Header from './components/header';
import Info from './components/info';
import Searching from './components/searchingField';
import WeatherBar from './components/weatherBar';
import GetLocation from './components/location';
import './App.scss';
const API_KEY = 'cbb2494521f7589543515335fdc5579a';
let ipCity;
fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(data =>{

      ipCity = data.city;
      
  })
class App extends React.Component{
  
  
  state = {
    city : undefined,
    country : undefined,
    temp : undefined,
    cloudness : undefined,
    wind : undefined,
    weatherImage: 'url("./1732363.jpg")',
    error: null
  }
  
  gettingWeatherInformation = async (event) => {
    event.preventDefault();
    const city = event.target.city.value;
    try {
      const api_url = await
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      const data = await api_url.json();
      
      this.setState({
        temp : data.main.temp,
        city : data.name,
        country : data.sys.country, 
        cloudness : data.clouds.all,
        wind : data.wind.speed,
      })
      if(data.clouds.all > 70) {
        this.setState({
          weatherImage: 'url("./tumblr_n63plyhz5t1qk9powo1_500.gif")'
        })
      }
      
      if(data.clouds.all < 70 && data.clouds.all > 35) {
        this.setState({
          weatherImage: 'url("./b2602932cb36bffa63c00f0f9e26e5b5.gif")'
        })
      }
      
      if(data.clouds.all < 35) {
        this.setState({
          weatherImage: 'url("./sunny_sky.jpeg")'
        })
      }
    } catch (error) {
      alert("Wrong city")
    }
  }
  
  check = async (event)=>{
    event.preventDefault();
    const api_url = await
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ipCity}&appid=${API_KEY}&units=metric`)
    const data = await api_url.json();
    this.setState({
      temp : data.main.temp,
      city : data.name,
      country : data.sys.country, 
      cloudness : data.clouds.all,
      wind : data.wind.speed,
    })
    console.log(this.state.temp)
    if(data.clouds.all > 70) {
      this.setState({
        weatherImage: 'url("./tumblr_n63plyhz5t1qk9powo1_500.gif")'
      })
    }
    
    if(data.clouds.all < 70 && data.clouds.all > 35) {
      this.setState({
        weatherImage: 'url("./b2602932cb36bffa63c00f0f9e26e5b5.gif")'
      })
    }
    
    if(data.clouds.all < 35) {
      this.setState({
        weatherImage: 'url("./sunny_sky.jpeg")'
      })
    }
    
  }
  
  
  render() {
    
    return(
      <div className = "weather-app" style = {{backgroundImage: this.state.weatherImage}}>
        <Header />
        <Info />
        <Searching 
          weather = {this.gettingWeatherInformation} 
          />
        <WeatherBar 
          city = {this.state.city}
          country = {this.state.country} 
          temp = {this.state.temp}
          cloudness = {this.state.cloudness}
          wind = {this.state.wind}
          />
        <GetLocation che = {this.check} />
      </div>
      );
  }
}


export default App;
