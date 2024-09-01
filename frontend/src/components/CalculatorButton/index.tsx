import { ReactNode } from 'react'
import styles from './style.module.css'

interface CalculatorButtonProps {
    children: ReactNode
    onClick?: () => void
}

function CalculatorButton({ children, onClick }: CalculatorButtonProps) {
  return (
    <button className={styles.button} onClick={onClick}>
        {children}
    </button>
  )
}

export default CalculatorButton