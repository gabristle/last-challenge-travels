import Header from '../../components/Header'
import HelloLogout from '../../components/HelloLogout'
import { useAuth } from '../../contexts/AuthContext'
import LoginSignup from '../../components/LoginSignup'
import styles from './style.module.css'
import SearchCard from '../../components/SearchCard'
import DestinationCard from '../../components/DestinationCard'
import Footer from '../../components/Footer'

function DestinationsPage() {
    const { user } = useAuth()
    
  return (
    <>
        <Header>
        {user ? <HelloLogout /> : <LoginSignup/>}
        </Header>
        <main>
            <section className={styles.mainSection}>
                <img src={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/imgHeader.png?alt=media&token=8cbd6124-d6d0-4c70-8fbc-55f2c15af5fe'} alt="cathedral of cologne" className={styles.imgHeader}/>
                <div className={styles.titleSection}>
                    <h1 className={styles.mainTitle}>Destination</h1>
                    <p><a href={'/'}>Home</a> / <a href={'/destinations'} className={styles.tourLink}>Destination</a></p>
                </div>
                <SearchCard className={styles.searchCard}></SearchCard>
            </section>
            <section className={styles.destinationsSection}>
                <div className={styles.destinationsGrids}>
                    <div className={styles.gridsContainer}>
                        <div className={styles.destinationsGrid}>
                            <DestinationCard image={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/mainImage.png?alt=media&token=9a7e6336-1b15-412b-91c1-c4acadcf03bf'} id={1}/>
                            <DestinationCard image={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/mainImage.png?alt=media&token=9a7e6336-1b15-412b-91c1-c4acadcf03bf'} id={2}/>
                            <DestinationCard image={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/mainImage.png?alt=media&token=9a7e6336-1b15-412b-91c1-c4acadcf03bf'} id={3}/>
                        </div>
                        <div className={`${styles.destinationsGrid} ${styles.gridSecondRow}`}>
                            <DestinationCard image={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/mainImage.png?alt=media&token=9a7e6336-1b15-412b-91c1-c4acadcf03bf'} id={4}/>
                            <DestinationCard image={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/mainImage.png?alt=media&token=9a7e6336-1b15-412b-91c1-c4acadcf03bf'} id={5}/>
                        </div>
                    </div>
                    <div className={styles.destination}>
                        <DestinationCard image={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/mainImage.png?alt=media&token=9a7e6336-1b15-412b-91c1-c4acadcf03bf'} id={6}/>
                    </div>
                </div>
                <div className={styles.destinationsGrids}>
                    <div className={styles.destination}>
                        <DestinationCard image={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/mainImage.png?alt=media&token=9a7e6336-1b15-412b-91c1-c4acadcf03bf'} id={12}/>
                    </div>
                    <div className={styles.gridsContainer}>
                        <div className={styles.destinationsGrid}>
                            <DestinationCard image={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/mainImage.png?alt=media&token=9a7e6336-1b15-412b-91c1-c4acadcf03bf'} id={7}/>
                            <DestinationCard image={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/mainImage.png?alt=media&token=9a7e6336-1b15-412b-91c1-c4acadcf03bf'} id={8}/>
                            <DestinationCard image={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/mainImage.png?alt=media&token=9a7e6336-1b15-412b-91c1-c4acadcf03bf'} id={9}/>
                        </div>
                        <div className={`${styles.destinationsGrid} ${styles.gridSecondRow}`}>
                            <DestinationCard image={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/mainImage.png?alt=media&token=9a7e6336-1b15-412b-91c1-c4acadcf03bf'} id={10}/>
                            <DestinationCard image={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/mainImage.png?alt=media&token=9a7e6336-1b15-412b-91c1-c4acadcf03bf'} id={11}/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <Footer></Footer>
    </>
  )
}

export default DestinationsPage