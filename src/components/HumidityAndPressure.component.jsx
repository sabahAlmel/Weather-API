import styles from './HumidityAndPressure.module.css'
let HumidityAndPressure=({humidity,pressure})=>{
   return(
    <div className={styles.other}>
    <div className="Humidity">
        <span>Humidity</span> {humidity}%
    </div>
    <div className="pressure">
            <span>Pressure</span> {pressure}
    </div>
</div>
   )
}

export default HumidityAndPressure