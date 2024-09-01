import { useState } from 'react'
import Button from '../Button'
import RatingInput from '../RatingInput'
import styles from './style.module.css'
import { Review } from '../../interfaces/Review'

interface ReviewFormProps {
    submit: (review: Review) => void
}

function ReviewForm({ submit }: ReviewFormProps) {
    const [userName , setUserName] = useState<string>('')
    const [userEmail, setUserEmail] = useState<string>('')
    const [userText, setUserText] = useState<string>('')
    const [services, setServices] = useState<number>(0)
    const [locations, setLocations] = useState<number>(0)
    const [amenities, setAmenities] = useState<number>(0)
    const [food, setFood] = useState<number>(0)
    const [prices, setPrices] = useState<number>(0)
    const [room, setRoom] = useState<number>(0)

    const handleRating = (criterius: string, value:number) => {
        switch(criterius) {
            case 'services':
                setServices(value)
                break;
            case 'food':
                setFood(value)
                break;
            case 'amenities': 
                setAmenities(value)
                break;
            case 'room':
                setRoom(value)
                break;
            case 'locations':
                setLocations(value)
                break;
            case 'prices': 
                setPrices(value)
                break;
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const newReview = {name_user: userName, email_user: userEmail, message: userText, services: services, amenities: amenities, food: food, room: room, prices: prices, locations: locations}
        try {
            submit(newReview)
            
        }catch(error){
            console.error(error)
        }
    }
    
  return (
    <div className={styles.formContainer}>
        <h2 className={styles.title}>Add a review</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.ratingInputs}>
                <div className={styles.formRow}>
                    <RatingInput criterion={'Services'} ratingChange={(value) => handleRating('services', value)}/>
                    <RatingInput criterion={'Locations'} ratingChange={(value) => handleRating('locations', value)}/>
                    <RatingInput criterion={'Amenities'} ratingChange={(value) => handleRating('amenities', value)}/>
                    <RatingInput criterion={'Prices'} ratingChange={(value) => handleRating('prices', value)}/>
                </div>
                <div className={styles.formRow}>
                    <RatingInput criterion={'Food'} ratingChange={(value) => handleRating('food', value)}/>
                    <RatingInput criterion={'Room comfort and quality'} ratingChange={(value) => handleRating('room', value)}/>
                </div>
            </div>
            <div className={styles.formInputs}>
                <div className={styles.formRow}>
                    <input onChange={(e) => setUserName(e.target.value)} type='text' placeholder='Your name' required></input>
                    <input onChange={(e) => setUserEmail(e.target.value)} type='email' placeholder='Email address' required/>
                </div>
                <textarea onChange={(e) => setUserText(e.target.value)} name="comment" className={styles.textarea} placeholder={'Write your comment'} required id={'comment'}></textarea>
                <Button type={'submit'}>Submit review</Button>
            </div>
        </form>
    </div>
  )
}

export default ReviewForm