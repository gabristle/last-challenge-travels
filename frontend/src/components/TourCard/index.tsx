import Grade from '../Grade'
import styles from './style.module.css'
import { Destination } from '../../interfaces/Destination'
import { useNavigate } from 'react-router-dom'

interface TourCardProps {
  image: string
  city: string
  destination?: Destination
  tour: string
  grade: number
  reviews: number
  duration: number
  cost: number
  id?: number
}

function TourCard({ image, tour, grade, reviews = 0, duration, cost, city, destination, id }:TourCardProps) {
  const navigate = useNavigate()

  function handleNavigate(){
    navigate(`/tour/${id}`)
  }

  return (
    <div className={styles.cardContainer} onClick={handleNavigate}>
        <div className={styles.imageContainer}>
          <div className={styles.heartContainer}>
            <img src={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/heart.png?alt=media&token=4d7e8a18-e411-44e7-b129-f36395b5a5fb'} alt="heart icon" className={styles.heartIcon}/>
          </div>
          <img src={image} alt={`image from ${tour}`} className={styles.image}/>
        </div>
        <div className={styles.infoContainer}>
            <p>{city}, {destination?.name}</p>
            <h3 className={styles.tourName}>{tour}</h3>
            <div className={styles.infoRow}>
                <div className={styles.gradeRow}>
                  <Grade grade={grade}/>
                  <p>{reviews} reviews</p>
                </div>
                <div className={styles.durationContainer}>
                  <img src={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/clock.png?alt=media&token=7f6c4216-1035-49fa-a0a7-10d63ff55e1a'} alt="clock icon" className={styles.clockIcon}/>
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
