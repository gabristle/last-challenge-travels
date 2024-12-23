import { ChangeEvent } from 'react'
import styles from './style.module.css'

interface InputProps {
    type?: string
    placeholder: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    name?: string
    id?: string
    pattern?: string
    icon?: string | null
    className?: string
    title?: string
}
    
function Input({type = 'text', placeholder, icon = null, onChange, name, id, pattern, className, title}: InputProps) {
  return (
    <div className={`${styles.inputContainer} ${className}`}>
        {icon && <img src={icon} className={styles.inputIcon}/>}
        <input type={type} placeholder={placeholder} onChange={onChange} name={name} id={id} pattern={pattern} className={styles.input} title={title} required></input>
    </div>
  )
}

export default Input