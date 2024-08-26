import { ReactNode } from 'react'
import styles from './style.module.css'

interface ButtonProps {
  children: ReactNode
  onClick?: (() => void) | ((e: React.MouseEvent<HTMLButtonElement>) => void)
  type?: 'button' | 'submit' | 'reset'
  className?: string
}

function Button({ children, onClick, type = 'button', className }: ButtonProps) {
  return (
    <>
        <button type={type} onClick={onClick} className={`${styles.button} ${className}`}>{children}</button>
    </>
  )
}

export default Button