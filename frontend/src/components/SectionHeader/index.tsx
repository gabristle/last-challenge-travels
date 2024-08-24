import styles from './style.module.css'

interface SectionHeaderProps {
  title: string
  subtitle: string
  className?: string
}

function SectionHeader({ title, subtitle, className }: SectionHeaderProps) {
  return (
    <div className={`${styles.container} ${className}`}>
        <div className={styles.titleRow}>
            <div className={styles.line}></div>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.line}></div>
        </div>
        <p className={styles.subtitle}>{subtitle}</p>
    </div>
  )
}

export default SectionHeader