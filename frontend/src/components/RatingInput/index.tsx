import { useState } from 'react';
import styles from './style.module.css'

interface RatingInputProps {
    criterion: string
}

function RatingInput({ criterion }: RatingInputProps) {
    const [rating, setRating] = useState<number>(0);
    const starsArray = [1, 2, 3, 4, 5];

    function handleClick(starIndex: number){
        setRating(starIndex);
    };
  return (
    <div>
        <p className={styles.criterion}>{criterion}</p>
        {starsArray.map(starIndex => (
            <span
                key={starIndex}
                className={`${styles.star} ${starIndex <= rating ? styles.selected : ''}`}
                onClick={() => handleClick(starIndex)}
            >
            ★
            </span>
        ))}
    </div>
  )
}

export default RatingInput