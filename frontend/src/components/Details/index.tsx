import styles from './style.module.css'
import localization from '../../assets/localization.png'
import favorite from '../../assets/favorite.png'
import pinkStar from '../../assets/pinkStar.png'
import share from '../../assets/share.png'
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
                    <img src={localization} alt="location icon" className={styles.icon}/>
                    <p>{city}, {destination?.name || ''}</p>
                </div>
                <a href="#mapAddress">View on map</a>
            </div>
            <div className={styles.actions}>
                <img src={share} alt="share icon" className={styles.icon}/>
                <img src={favorite} alt="favorite icon" className={styles.icon}/>
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
                    <img src={pinkStar} alt="star icon" className={styles.starIcon}/>
                    <p>{grade} <span>({reviewCount} reviews)</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Details