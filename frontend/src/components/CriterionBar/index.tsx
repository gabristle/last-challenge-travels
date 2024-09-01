import styles from './style.module.css'

interface CriterionBarProps {
    value: number
    criterion: string
}

function CriterionBar({ value, criterion }: CriterionBarProps) {
    
  return (
    <div>
        <p className={styles.criterion}>{criterion}</p>
        <div className={styles.barRow}>
            <div className={styles.bar}>
                <div className={styles.valueBar} style={{width: `${value*10}%`}}></div>
            </div>
            <p className={styles.value}>{value}.0</p>
        </div>
    </div>
  )
}

export default CriterionBar