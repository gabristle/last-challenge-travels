import styles from './style.module.css'
import Citation from '../../assets/citation.png'

interface QuoteProps {
    citation: string
    author: string
    occupation: string
}

function Quote({ citation, author, occupation }: QuoteProps) {
  return (
    <div className={styles.quoteContainer}>
        <img src={Citation} alt="quote icon"/>
        <q>{citation}</q>
        <p>-By {author}, {occupation}</p>
    </div>
  )
}

export default Quote