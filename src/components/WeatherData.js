
const WeatherData = (props) =>{
    return(
        <div className="wd">
            <p><span>conditions:</span>{props.conditons}</p>
            <p><span>time:</span>{props.time}</p>
        </div>
    )
}

export default WeatherData