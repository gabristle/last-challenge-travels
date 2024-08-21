import { ReactNode } from 'react'
import styles from './style.module.css'

interface ButtonProps {
    children: ReactNode
    onClick?: () => void
    type?: 'button' | 'submit' | 'reset'
}

function Button({ children, onClick, type = 'button' }: ButtonProps) {
  return (
    <>
        <button type={type} onClick={onClick} className={styles.button}>{children}</button>
    </>
  )
}

export default Button