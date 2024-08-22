import { ReactNode } from 'react'
import styles from './style.module.css'

interface CalculatorButtonProps {
    children: ReactNode
}

function CalculatorButton({ children }: CalculatorButtonProps) {
  return (
    <button className={styles.button}>
        {children}
    </button>
  )
}

export default CalculatorButton