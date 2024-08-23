import Button from '../Button'
import RatingInput from '../RatingInput'
import styles from './style.module.css'

function ReviewForm() {
    function handleSubmit(){

    }
    
  return (
    <div className={styles.formContainer}>
        <h2 className={styles.title}>Add a review</h2>
        <form className={styles.form}>
            <div className={styles.ratingInputs}>
                <div className={styles.formRow}>
                    <RatingInput criterion={'Services'}/>
                    <RatingInput criterion={'Locations'}/>
                    <RatingInput criterion={'Amenities'}/>
                    <RatingInput criterion={'Prices'}/>
                </div>
                <div className={styles.formRow}>
                    <RatingInput criterion={'Food'}/>
                    <RatingInput criterion={'Room comfort and quality'}/>
                </div>
            </div>
            <div className={styles.formInputs}>
                <div className={styles.formRow}>
                    <input type='text' placeholder='Your name' pattern={'[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]{3,}$'}></input>
                    <input type='email' placeholder='Email address' pattern={'[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'}/>
                </div>
                <textarea name="comment" id="comment" className={styles.textarea} placeholder={'Write your comment'}></textarea>
                <Button onClick={handleSubmit}>Submit review</Button>
            </div>
        </form>
    </div>
  )
}

export default ReviewForm