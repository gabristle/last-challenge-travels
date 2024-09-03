import { useEffect, useState } from 'react'
import CalculatorButton from '../CalculatorButton'
import Input from '../Input'
import styles from './style.module.css'
import Button from '../Button'

interface CalculatorProps {
    cost: number
    duration: number
}

function Calculator({ cost, duration }: CalculatorProps) {
    const [adults, setAdults] = useState<number>(0)
    const [kids, setKids] = useState<number>(0)
    const [children, setChildren] = useState<number>(0)
    const [totalCost, setTotalCost] = useState<number>(cost)
    const [placeholder, setPlaceholder] = useState<boolean>(true)
    const [errorMessage, setErrorMessage] = useState<string>('')

    useEffect(() => {
        if(adults >= children-1){
            setTotalCost(duration*(cost * (adults+(kids/2))))
        }else{
            setTotalCost(duration*(cost * (adults+(kids/2)+(children/2))))
        }
        if(adults == 0) {
            setChildren(0)
        }
        setErrorMessage('')
    }, [adults, kids, children])

    function handleChange(){
        
    }

    function handleClick(){
        setPlaceholder(false)
    }

    function handleAddAdult(){ 
        setAdults(adults+1)
    }

    function handleRemoveAdult(){
        if(adults > 0){
            setAdults(adults-1)
        }
    }

    function handleAddKid(){ 
        setKids(kids+1)
    }

    function handleRemoveKid(){
        if(kids > 0){
            setKids(kids-1)
        } 
    }

    function handleAddChildren(){ 
        if(adults > 0){
            setChildren(children+1)
        }
        setErrorMessage('You need at least 1 paying adult to add a child')
    }

    function handleRemoveChildren(){
        if(children > 0){
            setChildren(children-1)
        }
    }

  return (
    <div className={styles.calculatorContainer}>
        <p className={styles.costParagraph}><span className={styles.cost}>${cost} </span>/ per person</p>
        <div className={styles.line}></div>
        <div className={styles.inputs}>
            <div className={styles.inputContainer} onClick={handleClick}>
                <label htmlFor='date' className={styles.label}>Date</label>
                {placeholder && <div className={styles.datePlaceholder}>Choose date</div>}
                <Input id='date' type='date' placeholder='Choose date' onChange={handleChange} className={styles.dateInput}></Input>
                <img className={styles.calendarIcon} src={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/calendarLigth.png?alt=media&token=29340340-673f-4ee3-8425-ec8e7131eff5'} alt="calendar icon" />
            </div>
            <div className={styles.inputContainer}>
                <label htmlFor='time' className={styles.label}>Time</label>
                <select name='time' id='time' className={styles.select}>
                    <option value="0" className={styles.selectOption}>Select</option>
                    <option value={duration}>{duration} days</option>
                </select>
            </div>
        </div>
        <label className={styles.label}>Ticket</label>
        <div id='calculator' className={styles.calculator}>
            <div className={styles.calculatorRow}>
                <p className={styles.age}>Adults (18+ years)</p>
                <div className={styles.buttonsRow}>
                    <CalculatorButton onClick={handleRemoveAdult}>-</CalculatorButton>
                    <CalculatorButton>{adults}</CalculatorButton>
                    <CalculatorButton onClick={handleAddAdult}>+</CalculatorButton>
                </div>
            </div>
            <div className={styles.calculatorRow}>
                <p className={styles.age}>Kids (12+ years)</p>
                <div className={styles.buttonsRow}>
                    <CalculatorButton onClick={handleRemoveKid}>-</CalculatorButton>
                    <CalculatorButton>{kids}</CalculatorButton>
                    <CalculatorButton onClick={handleAddKid}>+</CalculatorButton>
                </div>
            </div>
            <div className={`${styles.childrenCalculator} `}>
                <div className={styles.childrenRow}>
                    <p className={styles.age}>Children (3+ years)</p>
                    <div className={styles.buttonsRow}>
                        <CalculatorButton onClick={handleRemoveChildren}>-</CalculatorButton>
                        <CalculatorButton>{children}</CalculatorButton>
                        <CalculatorButton onClick={handleAddChildren}>+</CalculatorButton>
                    </div>
                </div>
                {errorMessage != '' && <p className={styles.errorMessage}>{errorMessage}</p>}
            </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.total}>
            <p className={styles.age}>Total</p>
            <p><span className={styles.totalCost}>${totalCost}</span></p>
        </div>
        <Button>Book now</Button>
    </div>
  )
}

export default Calculator