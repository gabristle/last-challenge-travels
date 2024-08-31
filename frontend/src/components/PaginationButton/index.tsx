import { MouseEventHandler, ReactNode } from 'react'
import styles from './style.module.css'

interface PaginationButtonProps {
    children: ReactNode
    onClick: MouseEventHandler<HTMLButtonElement>
}

function PaginationButton({ children, onClick }: PaginationButtonProps) {
  return (
    <button className={styles.button} onClick={onClick}>
        {children}
    </button>
  )
}

export default PaginationButton





















































































































