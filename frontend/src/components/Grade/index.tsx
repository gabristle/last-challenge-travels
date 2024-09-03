import styles from './style.module.css'

interface GradeProps {
  grade: number
}

function Grade({ grade }: GradeProps) {
  return (
    <div className={styles.container}>
        <img src={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/star.png?alt=media&token=bd431e1e-a5c2-44ad-8df7-11c8fd0b9fcd'} alt="star icon" className={styles.icon}/>
        <p className={styles.grade}>{grade.toFixed()}</p>
    </div>
  )
}

export default Grade