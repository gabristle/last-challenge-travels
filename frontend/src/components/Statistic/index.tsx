import styles from './style.module.css'

interface StatisticProps {
    value: string
    text: string
}

function Statistic({ value, text }:StatisticProps) {
  return (
    <div className={styles.statisticContainer}>
        <span className={styles.value}>{value}</span>
        <p className={styles.text}>{text}</p>
    </div>
  )
}

export default Statistic