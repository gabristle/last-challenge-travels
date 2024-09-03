import { ChangeEvent } from 'react'
import styles from './style.module.css'

interface SortProps {
    tours: number
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

function Sort({ tours, onChange}: SortProps) {

  return (
    <div className={styles.sortContainer}>
        <p>{tours} Tours</p>
        <div className={styles.sortRow}>
            <p>Sort by</p>
            <img src={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/sort.png?alt=media&token=cee66ff7-5326-457c-8f0d-ed0c83972e52'} alt="" className={styles.sortIcon}/>
            <select className={styles.sortSelect} onChange={onChange}>
                <option value="">Title</option>
                <option value="cost">Cost</option>
            </select>
        </div>
    </div>
  )
}

export default Sort