import React from 'react'
import "./style.css"
import weatherData from './weatherData';
import WeatherForecast from './components/WeatherForecast';


const weather = weatherData.map((ele, index)=>{
  return <WeatherForecast {...ele} key={index} />
})
console.log(weather)

 function App() {
 return(
  <div className="App">
    <h1>My weather Icons</h1>
    <section>{weather}</section>
  </div>
 )
}

export default App;
