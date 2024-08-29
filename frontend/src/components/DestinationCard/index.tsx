import { useEffect, useState } from 'react'
import styles from './style.module.css'
import { Destination } from '../../interfaces/Destination'
import destinationService from '../../services/destination/destinationService'

interface DestinationCardProps {
    image: string
    id: number
}

function DestinationCard({ image, id }: DestinationCardProps) {
  const [destination, setDestination] = useState<Destination | null>(null)

  useEffect(() => {
    const getDestination = async () => {
      try{
        const destination = await destinationService.destinationDetails(id)
        setDestination(destination)
      }catch(error){
        console.error(error)
      }
    }

    getDestination() 
  }, [])

  return (
    <div className={styles.destinationContainer}>
        <div className={styles.gradient}>
        </div>
        <img src={image} alt={`${destination} photo`} className={styles.destinationImg}/>
        <div className={styles.destinationInfos}>
            <small className={styles.travelers}>{destination?.travelers} Travelers</small>
            <h3 className={styles.destination}>{destination?.name}</h3>
        </div>
        
    </div>
  )
}

export default DestinationCard