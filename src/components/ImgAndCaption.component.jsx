import clear from "../img/weather-icons/clear.svg";
import cloudy from "../img/weather-icons/cloudy.svg"
import drizzle from "../img/weather-icons/drizzle.svg"
import fog from "../img/weather-icons/fog.svg"
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg"
import partlycloudy from "../img/weather-icons/partlycloudy.svg"
import rain from "../img/weather-icons/rain.svg"
import snow from "../img/weather-icons/snow.svg"
import storm from "../img/weather-icons/storm.svg"
import unknown from "../img/weather-icons/unknown.svg"
import styles from "./ImgAndCaption.module.css"

const ImgAndCaption=({desc})=>{
    return(
        <div>
            <img src={clear} alt={`${desc.split(' ')[0]}`}/>
            {/* <img src=`./img/weather-icons/${desc.split(' ')[0]}.svg` alt="Weather"/> */}
            <div className={styles.captionOnWeather}>{desc}</div>

        </div>
    )
}

export default ImgAndCaption