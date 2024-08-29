import styles from './style.module.css'
import localization from '../../assets/localization.png'
import favorite from '../../assets/favorite.png'
import pinkStar from '../../assets/pinkStar.png'
import share from '../../assets/share.png'

interface DetailsProps {
    city: string
    country: string
    tour: string
    costPerPerson: number
    duration: number
    maxPeople: number
    minAge: number
    type: string
    grade: number
    reviews: number
}

function Details({ city, country, tour, costPerPerson, duration, maxPeople, minAge, type, grade, reviews }: DetailsProps) {
  return (
    <div className={styles.detailsContainer}>
        <div className={styles.actionsRow}>
            <div className={styles.localization}>
                <div className={styles.localizationRow}>
                    <img src={localization} alt="location icon" className={styles.icon}/>
                    <p>{city}, {country}</p>
                </div>
                <a href="">View on map</a>
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
                <p>{type}</p>
            </div>
            <div className={styles.detailContainer}>
                <p>Reviews</p>
                <div className={styles.reviewRow}>
                    <img src={pinkStar} alt="star icon" className={styles.starIcon}/>
                    <p>{grade}.0 <span>({reviews} reviews)</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Details