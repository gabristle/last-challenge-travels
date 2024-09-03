import styles from './style.module.css'

interface SortProps {
    tours: number
}

function Sort({ tours }: SortProps) {
  return (
    <div className={styles.sortContainer}>
        <p>{tours} Tours</p>
        <div className={styles.sortRow}>
            <p>Sort by</p>
            <img src={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/sort.png?alt=media&token=cee66ff7-5326-457c-8f0d-ed0c83972e52'} alt="" className={styles.sortIcon}/>
            <select className={styles.sortSelect}>
                <option value="title">Title</option>
            </select>
        </div>
    </div>
  )
}

export default Sort