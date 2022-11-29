import WeatherIcon from "./WeatherIcon"
import WeatherData from "./WeatherData"

const WeatherForecast = (props) =>{
    return(
        <div className="weather">
            <WeatherIcon img = {props.img}/>
            <WeatherData {...props}/>
        </div>
    )
}

export default WeatherForecast