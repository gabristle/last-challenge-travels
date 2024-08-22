import styles from './style.module.css'

interface DestinationCardProps {
    image: string
    travelers: number
    destination: string
}

function DestinationCard({ image, travelers, destination }: DestinationCardProps) {
  return (
    <div className={styles.destinationContainer}>
        <div className={styles.gradient}>
        </div>
        <img src={image} alt={`${destination} photo`} className={styles.destinationImg}/>
        <div className={styles.destinationInfos}>
            <small className={styles.travelers}>{travelers} Travelers</small>
            <h3 className={styles.destination}>{destination}</h3>
        </div>
        
    </div>
  )
}

export default DestinationCard