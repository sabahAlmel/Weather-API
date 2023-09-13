import styles from "./TodayWeather.module.css"
import ImgAndCaption from "./ImgAndCaption.component";
import Temp from "./Temp.component";
import HumidityAndPressure from "./HumidityAndPressure.component";
const TodayWeather=({humidity,pressure,temp,desc})=>{
    return(
        <main>
        <div className="todayWeather">
            <ImgAndCaption desc={desc}/>
            <Temp temp={temp}/>
            <HumidityAndPressure humidity={humidity} pressure={pressure}/>
        </div>
    </main>
    )
}

export default TodayWeather