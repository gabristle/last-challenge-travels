import styles from './style.module.css'
import { Destination } from '../../interfaces/Destination'
import { Category } from '../../interfaces/Category'

interface DetailsProps {
    city: string
    destination? : Destination
    tour: string
    costPerPerson: number
    duration: number
    maxPeople: number
    minAge: number
    category?: Category
    grade: number
    reviewCount: number
}

function Details({ city, destination, tour, costPerPerson, duration, maxPeople, minAge, category, grade, reviewCount }: DetailsProps) {
  return (
    <div className={styles.detailsContainer}>
        <div className={styles.actionsRow}>
            <div className={styles.localization}>
                <div className={styles.localizationRow}>
                    <img src={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/localization.png?alt=media&token=865c8f3c-30e2-4d60-a111-c1040b0ab144'} alt="location icon" className={styles.icon}/>
                    <p>{city}, {destination?.name || ''}</p>
                </div>
                <a href="#mapAddress">View on map</a>
            </div>
            <div className={styles.actions}>
                <img src={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/share.png?alt=media&token=c1f7ba5b-32f7-4a80-80bb-34d6fabc6812'} alt="share icon" className={styles.icon}/>
                <img src={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/favorite.png?alt=media&token=6b63df8f-a186-4fa3-ad03-180e15a1a83e'} alt="favorite icon" className={styles.icon}/>
            </div>
        </div>
        <h1 className={styles.tour}>{tour}</h1>
        <div className={styles.line}></div>
        <div className={styles.details}>
            <div className={styles.detailContainer}>
                <p>From</p>
                <p className={styles.style}>${costPerPerson}</p>
            </div>
            <div className={styles.detailContainer}>
                <p>Duration</p>
                <p>{duration} days</p>
            </div>
            <div className={styles.detailContainer}>
                <p>Max People</p>
                <p>{maxPeople}</p>
            </div>
            <div className={styles.detailContainer}>
                <p>Min Age</p>
                <p>{minAge}</p>
            </div>
            <div className={styles.detailContainer}>
                <p>Tour Type</p>
                <p>{category?.name}</p>
            </div>
            <div className={styles.detailContainer}>
                <p>Reviews</p>
                <div className={styles.reviewRow}>
                    <img src={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/pinkStar.png?alt=media&token=0dc43dda-00fc-45d5-add3-c8cfc02b49d9'} alt="star icon" className={styles.starIcon}/>
                    <p>{grade} <span>({reviewCount} reviews)</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Details