import Input from '../Input'
import styles from './style.module.css'
import paperPlane from '../../assets/paperPlane.png'
import Button from '../Button'
import logoDark from '../../assets/logoTrisogDark.png'
import linkedin from '../../assets/linkedin-white.png'
import twitter from '../../assets/twitter-white.png'
import facebook from '../../assets/facebook.png'
import { useState } from 'react'

function Footer() {
    const [errorMessage, setErrorMessage] = useState<string>()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setErrorMessage('')
        const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
        const value = e.target.value
        if(value == ''){
            setErrorMessage('')
        }
        const test = regex.test(value)
        setTimeout(() => {
            if(!test){
                setErrorMessage('Insert a valid email')
            }else {
                setErrorMessage('')
            }
        }, 2500)
    }

  return (
    <div className={styles.footerContainer}>
        <section className={styles.contactSection}>
            <img src={logoDark} alt="trisog logo" className={styles.logo}/>
            <div className={styles.contactInfo}>
                <h2 className={styles.title}>Need any help?</h2>
                <p className={styles.phone}>Call Us: <span className={styles.span}>(888)1234 5678</span></p>
            </div>
            <div className={styles.contactInfo}>
                <p>Love Street, Muscat, Oman</p>
                <p>exaample@trisog.com</p>
            </div>
            <div className={styles.contactSocial}>
                <a href="https://www.facebook.com/" target='_blank'><img src={facebook} alt="facebook icon" className={styles.socialIcon}/></a>
                <a href="https://x.com/" target='_blank'><img src={twitter} alt="twitter icon" className={styles.socialIcon}/></a>
                <a href="https://www.linkedin.com/" target='_blank'><img src={linkedin} alt="linkedin icon" className={styles.socialIcon}/></a>
            </div>
        </section>
        <section className={styles.linksSection}>
            <div className={styles.linksCompany}>
                <h2 className={styles.title}>Company</h2>
                <a href="">About Us</a>
                <a href="">Contact Us</a>
                <a href="">Travel Guides</a>
                <a href="">Data Policy</a>
            </div>
            <div className={styles.linksDestination}>
                <h2 className={styles.title}>Top Destination</h2>
                <div className={styles.linksRow}>
                    <div className={styles.linksList}>
                        <a href="">Las Vegas</a>
                        <a href="">New York City</a>
                        <a href="">San Francisco</a>
                        <a href="">Hawaii</a>
                    </div>
                    <div className={styles.linksList}>
                        <a href="">Tokyo</a>
                        <a href="">Sydney</a>
                        <a href="">Melbourne</a>
                        <a href="">Dubai</a>
                    </div>
                </div>
            </div>
        </section>
        <section className={styles.newsletterSection}>
            <div className={styles.signUpContainer}>
                <h2 className={styles.title}>Sign up Newsletter</h2>
                <div className={styles.signUp}>
                    <form className={styles.signUp}>
                        {errorMessage && <p>{errorMessage}</p>}
                        <Input placeholder={'Enter email...'} onChange={handleChange} icon={paperPlane} title={'Please enter a valid email'} required/>
                        <Button type={'submit'}>Submit</Button>
                    </form>
                </div>
            </div>
            <p className={styles.copyright}>©️ 2023 Trisog All Right Reserved</p>
        </section>
    </div>
  )
}

export default Footer