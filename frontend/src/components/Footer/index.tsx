import Input from '../Input'
import styles from './style.module.css'
import Button from '../Button'
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
            <img src={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/logoTrisogDark.png?alt=media&token=26e443e3-c64c-4855-ab87-768035573d19'} alt="trisog logo" className={styles.logo}/>
            <div className={styles.contactInfo}>
                <h2 className={styles.title}>Need any help?</h2>
                <p className={styles.phone}>Call Us: <span className={styles.span}>(888)1234 5678</span></p>
            </div>
            <div className={styles.contactInfo}>
                <p>Love Street, Muscat, Oman</p>
                <p>exaample@trisog.com</p>
            </div>
            <div className={styles.contactSocial}>
                <a href="https://www.facebook.com/" target='_blank'><img src={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/facebook.png?alt=media&token=9d6414d6-2da1-4294-9d5f-2c77253c2998'} alt="facebook icon" className={styles.socialIcon}/></a>
                <a href="https://x.com/" target='_blank'><img src={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/twitter-white.png?alt=media&token=85aefed7-f595-4f0e-8c75-dd7fc0f9b8bb'} alt="twitter icon" className={styles.socialIcon}/></a>
                <a href="https://www.linkedin.com/" target='_blank'><img src={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/linkedin-white.png?alt=media&token=2aad5ae0-a5b7-4f29-ad67-a581fc02d99d'} alt="linkedin icon" className={styles.socialIcon}/></a>
            </div>
        </section>
        <section className={styles.linksSection}>
            <div className={styles.linksCompany}>
                <h2 className={styles.title}>Company</h2>
                <a href="/error">About Us</a>
                <a href="/error">Contact Us</a>
                <a href="/error">Travel Guides</a>
                <a href="/error">Data Policy</a>
            </div>
            <div className={styles.linksDestination}>
                <h2 className={styles.title}>Top Destination</h2>
                <div className={styles.linksRow}>
                    <div className={styles.linksList}>
                        <a href="/error">Las Vegas</a>
                        <a href="/error">New York City</a>
                        <a href="/error">San Francisco</a>
                        <a href="/error">Hawaii</a>
                    </div>
                    <div className={styles.linksList}>
                        <a href="/error">Tokyo</a>
                        <a href="/error">Sydney</a>
                        <a href="/error">Melbourne</a>
                        <a href="/error">Dubai</a>
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
                        <Input placeholder={'Enter email...'} onChange={handleChange} icon={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/paperPlane.png?alt=media&token=3d794d6e-b576-47bd-8476-72cd4726fd82'} title={'Please enter a valid email'}/>
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