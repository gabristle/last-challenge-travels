import { ReactNode } from 'react'
import styles from './style.module.css'

interface PaginationButtonProps {
    children: ReactNode
}

function PaginationButton({ children }: PaginationButtonProps) {
  return (
    <button className={styles.button}>
        {children}
    </button>
  )
}

export default PaginationButton





















































































































