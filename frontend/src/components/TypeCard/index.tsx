import styles from './style.module.css'

interface TypeCardProps {
    icon: string
    category: string
    tours: number,
    cost: number
}

function TypeCard({ icon, category, tours, cost}: TypeCardProps) {
  return (
    <div className={styles.typeContainer}>
        <img src={icon} alt=""/>
        <h2>{category}</h2>
        <p>{tours} Tours+</p>
        <p className={styles.cost}>From <span>${cost}</span></p>
    </div>
  )
}

export default TypeCard