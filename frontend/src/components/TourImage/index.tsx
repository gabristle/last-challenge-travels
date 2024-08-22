import styles from './style.module.css'
import imageIcon from '../../assets/image.png'
import videoIcon from '../../assets/video.png'

interface TourImageProps {
    image: string
}

function TourImage({ image }: TourImageProps) {
  return (
    <div className={styles.tourImageContainer}>
        <img src={image} alt="" className={styles.tourImage}/>
        <div className={styles.buttonRow}>
            <button className={styles.button}>Video <img src={videoIcon} alt="" className={styles.buttonIcon}/></button>
            <button className={styles.button}>Gallery <img src={imageIcon} alt="" className={styles.buttonIcon}/></button>
        </div>
    </div>
  )
}

export default TourImage