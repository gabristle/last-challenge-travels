import styles from './style.module.css'

interface QuoteProps {
    citation: string
    author: string
    occupation: string
}

function Quote({ citation, author, occupation }: QuoteProps) {
  return (
    <div className={styles.quoteContainer}>
        <img src={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/citation.png?alt=media&token=e1941195-d038-424f-96c0-976f6b4a19a0'} alt="quote icon"/>
        <q>{citation}</q>
        <p>-By {author}, {occupation}</p>
    </div>
  )
}

export default Quote