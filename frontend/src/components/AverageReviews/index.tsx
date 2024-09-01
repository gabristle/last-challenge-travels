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
        if(averageGrade <= 1){
            setDescription('Very Poor')
        } else if (averageGrade <= 2){
            setDescription('Poor')
        } else if (averageGrade <= 3) {
            setDescription('Average')
        } else if ( averageGrade <= 4) {
            setDescription('Good')
        } else if (averageGrade <= 5) {
            setDescription('Excellent')
        }
    },[])


  return (
    <div className={styles.averageReviewsContainer}>
        <div className={styles.averageContainer}>
            <p className={styles.average}>{averageGrade.toFixed()}.0</p>
            <div className={styles.averageRow}>
                <img src={starIcon} alt="star icon" className={styles.starIcon}/>
                <p className={styles.averageDescription}>{description}</p>
            </div>
        </div>
        <div className={styles.criterionsRow}>
            <div className={styles.criterions}>
                <CriterionBar criterion={'Services'} value={Number(rating.averageService.toFixed())}></CriterionBar>
                <CriterionBar criterion={'Locations'} value={Number(rating.averageLocations.toFixed())}></CriterionBar>
                <CriterionBar criterion={'Amenities'} value={Number(rating.averageAmenities.toFixed())}></CriterionBar>
            </div>
            <div className={styles.criterions}>
                <CriterionBar criterion={'Prices'} value={Number(rating.averagePrices.toFixed())}></CriterionBar>
                <CriterionBar criterion={'Food'} value={Number(rating.averageFood.toFixed())}></CriterionBar>
                <CriterionBar criterion={'Room comfort and quality'} value={Number(rating.averageRoom.toFixed())}></CriterionBar>
            </div>
        </div>
    </div>
  )
}

export default AverageReviews