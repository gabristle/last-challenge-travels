import styles from './style.module.css'
import sortIcon from '../../assets/sort.png'

interface SortProps {
    tours: number
}

function Sort({ tours }: SortProps) {
  return (
    <div className={styles.sortContainer}>
        <p>{tours} Tours</p>
        <div className={styles.sortRow}>
            <p>Sort by</p>
            <img src={sortIcon} alt="" className={styles.sortIcon}/>
            <select className={styles.sortSelect}>
                <option value="title">Title</option>
            </select>
        </div>
    </div>
  )
}

export default Sort