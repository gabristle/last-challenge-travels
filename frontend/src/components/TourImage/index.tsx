import styles from './style.module.css'

interface TourImageProps {
    image: string
    className: string
    tourName: string
}

function TourImage({ image, className, tourName }: TourImageProps) {
  return (
    <div className={`${styles.tourImageContainer} ${className}`}>
        <img src={image} alt={tourName} className={styles.tourImage}/>
        <div className={styles.buttonRow}>
            <button className={styles.button}>Video <img src={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/video.png?alt=media&token=3d6c7810-3e04-4d2b-8d2c-ef61f35b5e90'} alt="" className={styles.buttonIcon}/></button>
            <button className={styles.button}>Gallery <img src={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/image.png?alt=media&token=43e126f8-5d69-4110-bc23-08f77538a37e'} alt="" className={styles.buttonIcon}/></button>
        </div>
    </div>
  )
}

export default TourImage