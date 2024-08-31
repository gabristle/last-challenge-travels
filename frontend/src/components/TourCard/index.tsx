import Grade from '../Grade'
import styles from './style.module.css'
import Heart from '../../assets/heart.png'
import Clock from '../../assets/clock.png'
import { Destination } from '../../interfaces/Destination'

interface TourCardProps {
  image: string
  city: string
  destination?: Destination
  tour: string
  grade: number
  reviews: number
  duration: number
  cost: number
}

function TourCard({ image, tour, grade, reviews, duration, cost, city, destination }:TourCardProps) {
  
  return (
    <div className={styles.cardContainer}>
        <div className={styles.imageContainer}>
          <div className={styles.heartContainer}>
            <img src={Heart} alt="heart icon" className={styles.heartIcon}/>
          </div>
          <img src={image} alt={`image from ${tour}`} className={styles.image}/>
        </div>
        <div className={styles.infoContainer}>
            <p>{city}, {destination?.name || 'not'}</p>
            <h3 className={styles.tourName}>{tour}</h3>
            <div className={styles.infoRow}>
                <div className={styles.gradeRow}>
                  <Grade grade={grade}/>
                  <p>{reviews} reviews</p>
                </div>
                <div className={styles.durationContainer}>
                  <img src={Clock} alt="clock icon" className={styles.clockIcon}/>
                  <p>{duration}days</p>
                </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.costContainer}>
              <small>Starting From</small>
              <p className={styles.cost}>${cost}</p>
            </div>
        </div>
    </div>
  )
}

export default TourCard
