import styles from './style.module.css'
import mainImg from '../../assets/mainImage.png'
import DestinationCard from '../DestinationCard'


function Destinations() {

    
  return (
    <div className={styles.destinationsGrids}>
        <div className={styles.gridsContainer}>
            <div className={styles.destinationsGrid}>
                <DestinationCard image={mainImg} id={1}/>
                <DestinationCard image={mainImg} id={2}/>
                <DestinationCard image={mainImg} id={3}/>
            </div>
            <div className={`${styles.destinationsGrid} ${styles.gridSecondRow}`}>
                <DestinationCard image={mainImg} id={4}/>
                <DestinationCard image={mainImg} id={5}/>
            </div>
        </div>
        <div className={styles.destination}>
            <DestinationCard image={mainImg} id={6}/>
        </div>
    </div>
  )
}

export default Destinations