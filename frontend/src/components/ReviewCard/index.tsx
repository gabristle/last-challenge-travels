import { ReactNode } from 'react'
import Grade from '../Grade'
import styles from './style.module.css'

interface ReviewCardProps {
    date: string
    author: string
    reviews: number
    children: ReactNode
    grade: number
}

function ReviewCard({ date, author, reviews, children, grade } : ReviewCardProps) {
  return (
    <div className={styles.reviewCard}>
        <div>
            <div className={styles.image}>{author.slice(0, 2)}</div>
        </div>
        <div className={styles.reviewInfos}>
            <p className={styles.date}>September {date}, 2024</p>
            <h3 className={styles.author}>{author}</h3>
            <div className={styles.reviewRow}>
                <Grade grade={grade}/>
                <p className={styles.reviews}>{reviews} reviews</p>
            </div>
            <p className={styles.comment}>{children}</p>
        </div>
    </div>
  )
}

export default ReviewCard