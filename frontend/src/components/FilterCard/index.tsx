import { ReactNode } from 'react'
import styles from './style.module.css'

interface FilterCardProps {
    title: string
    children: ReactNode
}

function FilterCard({ title, children }: FilterCardProps) {
  return (
    <div className={styles.filterCard}>
        <h2>{title}</h2>
        <div className={styles.content}>
            {children}
        </div>
    </div>
  )
}

export default FilterCard