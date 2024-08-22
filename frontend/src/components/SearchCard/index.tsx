import Input from '../Input'
import styles from './style.module.css'
import calendar from '../../assets/calendarLigth.png'
import paperPlane from '../../assets/paperPlane.png'
import people from '../../assets/people.png'
import flag from '../../assets/flag.png'
import Button from '../Button'

function SearchCard() {
    function handleChange() {

    }

  return (
    <div className={styles.searchCardContainer}>
        <div className={styles.inputContainer}>
            <label className={styles.label}>Destination</label>
            <Input icon={paperPlane} placeholder={'Where to go?'} onChange={handleChange}></Input>
        </div>
        <div className={styles.inputContainer}>
            <label className={styles.label}>Type</label>
            <img src={flag} alt="flag icon" className={styles.selectIcon}/>
            <select className={styles.selectInput}>
                <option value="">Activity</option>
            </select>
        </div>
        <div className={styles.inputContainer}>
            <label className={styles.label}>When</label>
            <Input icon={calendar} placeholder={'Date'} type={'text'} onChange={handleChange} pattern={'^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/((19|20)\d\d)$'}></Input>
        </div>
        <div className={styles.inputContainer}>
            <label className={styles.label}>Guests</label>
            <Input icon={people} type={'number'} placeholder={'0'} onChange={handleChange} pattern={'^([0-9]|1[0-9]|2[0-5])$'}></Input>
        </div>
        <Button>Search</Button>
    </div>
  )
}

export default SearchCard