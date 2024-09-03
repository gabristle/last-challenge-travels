import styles from './style.module.css'
import DestinationCard from '../DestinationCard'

function Destinations() {
    
  return (
    <div className={styles.destinationsGrids}>
        <div className={styles.gridsContainer}>
            <div className={styles.destinationsGrid}>
                <DestinationCard image={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/mainImage.png?alt=media&token=9a7e6336-1b15-412b-91c1-c4acadcf03bf'} id={1}/>
                <DestinationCard image={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/mainImage.png?alt=media&token=9a7e6336-1b15-412b-91c1-c4acadcf03bf'} id={2}/>
                <DestinationCard image={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/mainImage.png?alt=media&token=9a7e6336-1b15-412b-91c1-c4acadcf03bf'} id={3}/>
            </div>
            <div className={`${styles.destinationsGrid} ${styles.gridSecondRow}`}>
                <DestinationCard image={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/mainImage.png?alt=media&token=9a7e6336-1b15-412b-91c1-c4acadcf03bf'} id={4}/>
                <DestinationCard image={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/mainImage.png?alt=media&token=9a7e6336-1b15-412b-91c1-c4acadcf03bf'} id={5}/>
            </div>
        </div>
        <div className={styles.destination}>
            <DestinationCard image={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/mainImage.png?alt=media&token=9a7e6336-1b15-412b-91c1-c4acadcf03bf'} id={6}/>
        </div>
    </div>
  )
}

export default Destinations