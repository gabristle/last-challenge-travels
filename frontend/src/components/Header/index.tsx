import { ReactNode } from 'react'
import styles from './style.module.css'
import twitterIcon from '../../assets/twitter.png'
import googleIcon from '../../assets/google.png'
import pinterestIcon from '../../assets/pinterest.png'
import linkedinIcon from '../../assets/linkedin.png'
import bottomIcon from '../../assets/bottom.png'
import trisogLogo from '../../assets/logoTrisog.png'

interface HeaderProps {
    children: ReactNode
}

function Header({ children }:HeaderProps) {
  return (
    <div className={styles.headerContainer}>
        <div className={styles.topHeader}>
            <div className={styles.contact}>
                <p>(000)999-898-999</p>
                <p>|</p>
                <p>info@trisog.com</p>
            </div>
            <div className={styles.social}>
                <a href="https://x.com/"><img src={twitterIcon} alt="twitter icon" className={styles.socialIcon}/></a>
                <a href="https://www.linkedin.com/"><img src={linkedinIcon} alt="linkedin icon" className={styles.socialIcon}/></a>
                <a href="https://www.google.com/"><img src={googleIcon} alt="google icon" className={styles.socialIcon}/></a>
                <a href="https://br.pinterest.com/"><img src={pinterestIcon} alt="pinterest icon" className={styles.socialIcon}/></a>
                <p>|</p>
                <p>EUR</p>
                <img src={bottomIcon} alt="arrow to bottom" className={styles.bottom}/>
            </div>
        </div>
        <div className={styles.bottomHeader}>
            <div className={styles.navigationContainer}>
                <img src={trisogLogo} alt="Trisog logo" className={styles.logo}/>
                <nav>
                    <ul>
                        <a href="#">
                            <li>Home</li>
                        </a>
                        <a href="#">
                            <li>About</li>
                        </a>
                        <a href="#">
                            <li>Tours</li>
                        </a>
                        <a href="#">
                            <li>Destination</li>
                        </a>
                        <a href="#">
                            <li>Blog</li>
                        </a>
                        <a href="#">
                            <li>Pages</li>
                        </a>
                        <a href="#">
                            <li>Contact</li>
                        </a>
                    </ul>
                </nav>
            </div>
            {children}
        </div>
    </div>
  )
}

export default Header