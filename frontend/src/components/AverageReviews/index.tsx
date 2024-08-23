import styles from './style.module.css'
import CriterionBar from '../CriterionBar'
import starIcon from '../../assets/star.png'

function AverageReviews() {


  return (
    <div className={styles.averageReviewsContainer}>
        <div className={styles.averageContainer}>
            <p className={styles.average}>5.0</p>
            <div className={styles.averageRow}>
                <img src={starIcon} alt="star icon" className={styles.starIcon}/>
                <p className={styles.averageDescription}>Excellent</p>
            </div>
        </div>
        <div className={styles.criterionsRow}>
            <div className={styles.criterions}>
                <CriterionBar criterion={'Services'} value={100}></CriterionBar>
                <CriterionBar criterion={'Locations'} value={100}></CriterionBar>
                <CriterionBar criterion={'Amenities'} value={80}></CriterionBar>
            </div>
            <div className={styles.criterions}>
                <CriterionBar criterion={'Prices'} value={80}></CriterionBar>
                <CriterionBar criterion={'Food'} value={100}></CriterionBar>
                <CriterionBar criterion={'Room comfort and quality'} value={80}></CriterionBar>
            </div>
        </div>
    </div>
  )
}

export default AverageReviews