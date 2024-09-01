import styles from './style.module.css'
import CriterionBar from '../CriterionBar'
import starIcon from '../../assets/star.png'
import { useEffect, useState } from 'react'
import { Rating } from '../../interfaces/Rating'

interface AverageReviewsProps {
    rating: Rating
    averageGrade: number
}

function AverageReviews({ rating, averageGrade }: AverageReviewsProps) {
    const [description, setDescription ] = useState<string>()

    useEffect(() => {
        if(averageGrade <= 20){
            setDescription('Very Poor')
        } else if (averageGrade <= 40){
            setDescription('Poor')
        } else if (averageGrade <= 60) {
            setDescription('Average')
        } else if ( averageGrade <= 80) {
            setDescription('Good')
        } else if (averageGrade <= 100) {
            setDescription('Excellent')
        }
    },[])


  return (
    <div className={styles.averageReviewsContainer}>
        <div className={styles.averageContainer}>
            <p className={styles.average}>{averageGrade.toFixed()}</p>
            <div className={styles.averageRow}>
                <img src={starIcon} alt="star icon" className={styles.starIcon}/>
                <p className={styles.averageDescription}>{description}</p>
            </div>
        </div>
        <div className={styles.criterionsRow}>
            <div className={styles.criterions}>
                <CriterionBar criterion={'Services'} value={rating.averageService}></CriterionBar>
                <CriterionBar criterion={'Locations'} value={rating.averageLocations}></CriterionBar>
                <CriterionBar criterion={'Amenities'} value={rating.averageAmenities}></CriterionBar>
            </div>
            <div className={styles.criterions}>
                <CriterionBar criterion={'Prices'} value={rating.averagePrices}></CriterionBar>
                <CriterionBar criterion={'Food'} value={rating.averageFood}></CriterionBar>
                <CriterionBar criterion={'Room comfort and quality'} value={rating.averageRoom}></CriterionBar>
            </div>
        </div>
    </div>
  )
}

export default AverageReviews