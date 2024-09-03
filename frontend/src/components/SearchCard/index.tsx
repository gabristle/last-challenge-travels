import Input from '../Input'
import styles from './style.module.css'
import Button from '../Button'

interface SearchCardProps {
    className: string
}

function SearchCard({ className }: SearchCardProps) {
    function handleChange() {

    }

  return (
    <div className={`${styles.searchCardContainer} ${className}`}>
        <div className={styles.inputContainer}>
            <label className={styles.label}>Destination</label>
            <Input icon={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/paperPlane.png?alt=media&token=3d794d6e-b576-47bd-8476-72cd4726fd82'} placeholder={'Where to go?'} onChange={handleChange}></Input>
        </div>
        <div className={styles.inputContainer}>
            <label className={styles.label}>Type</label>
            <img src={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/flag.png?alt=media&token=bee7da66-5eb0-498b-83fe-cf2556d751d9'} alt="flag icon" className={styles.selectIcon}/>
            <select className={styles.selectInput}>
                <option value="">Activity</option>
            </select>
        </div>
        <div className={styles.inputContainer}>
            <label className={styles.label}>When</label>
            <Input icon={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/calendarLigth.png?alt=media&token=29340340-673f-4ee3-8425-ec8e7131eff5'} placeholder={'Date'} type={'text'} onChange={handleChange} pattern={'^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/((19|20)\d\d)$'}></Input>
        </div>
        <div className={styles.inputContainer}>
            <label className={styles.label}>Guests</label>
            <Input icon={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/people.png?alt=media&token=f837e08c-d622-48d6-a56d-e6632837bd75'} type={'number'} placeholder={'0'} onChange={handleChange} pattern={'^([0-9]|1[0-9]|2[0-5])$'}></Input>
        </div>
        <Button className={styles.searchButton}>Search</Button>
    </div>
  )
}

export default SearchCard