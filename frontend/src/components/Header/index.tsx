import { ReactNode } from 'react'
import styles from './style.module.css'

interface HeaderProps {
    children: ReactNode
}

function Header({ children }:HeaderProps) {

  return (
    <header className={styles.headerContainer}>
        <div className={styles.topHeader}>
            <div className={styles.contact}>
                <p>(000)999-898-999</p>
                <p>|</p>
                <p>info@trisog.com</p>
            </div>
            <div className={styles.social}>
                <a href="https://x.com/" target='_blank'><img src={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/twitter.png?alt=media&token=489b8168-556a-41d8-b62a-b306a6b161b6'} alt="twitter icon" className={styles.socialIcon}/></a>
                <a href="https://www.linkedin.com/" target='_blank'><img src={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/linkedin.png?alt=media&token=7292e9d4-40bb-4526-a664-dd159d9733cd'} alt="linkedin icon" className={styles.socialIcon}/></a>
                <a href="https://www.google.com/" target='_blank'><img src={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/google.png?alt=media&token=5b4f67c0-bab3-41cd-825a-c6be47f2b465'} alt="google icon" className={styles.socialIcon}/></a>
                <a href="https://br.pinterest.com/" target='_blank'><img src={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/pinterest.png?alt=media&token=8710a27b-02cc-42f2-9d7c-f2c9f192e908'} alt="pinterest icon" className={styles.socialIcon}/></a>
                <p>|</p>
                <p>EUR</p>
                <img src={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/bottom.png?alt=media&token=1295e0f0-12a8-4fd9-af30-0ef170940ff9'} alt="arrow to bottom" className={styles.bottom}/>
            </div>
        </div>
        <div className={styles.bottomHeader}>
            <div className={styles.navigationContainer}>
                <img src={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/logoTrisog.png?alt=media&token=1117d9a5-7455-458d-b051-272ee8efb9e4'} alt="Trisog logo" className={styles.logo}/>
                <nav>
                    <ul>
                        <a href={'/'}>
                            <li>Home</li>
                        </a>
                        <a href={'/error'}>
                            <li>About</li>
                        </a>
                        <a href={'/tours'}>
                            <li>Tours</li>
                        </a>
                        <a href={'/destinations'}>
                            <li>Destination</li>
                        </a>
                        <a href={'/error'}>
                            <li>Blog</li>
                        </a>
                        <a href={'/error'}>
                            <li>Pages</li>
                        </a>
                        <a href={'/error'}>
                            <li>Contact</li>
                        </a>
                    </ul>
                </nav>
            </div>
            {children}
        </div>
    </header>
  )
}

export default Header