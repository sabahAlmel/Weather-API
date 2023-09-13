import styles from './Temp.module.css'
const Temp=({temp})=>{
    return(
        <div className={styles.temp}>
        <span>Temperature</span> {parseInt(temp) - 273.15}C
    </div>
    )
}

export default Temp