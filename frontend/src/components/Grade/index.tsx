import styles from './style.module.css'
import star from '../../assets/star.png'

interface GradeProps {
    grade: number
}

function Grade({ grade }: GradeProps) {
  return (
    <div className={styles.container}>
        <img src={star} alt="star icon" className={styles.icon}/>
        <p className={styles.grade}>{grade}.0</p>
    </div>
  )
}

export default Grade