import Header from "../../components/Header"
import LoginSignup from "../../components/LoginSignup"
import SearchCard from "../../components/SearchCard"
import mainImg from "../../assets/mainImage.png"
import styles from "./style.module.css"
import SectionHeader from "../../components/SectionHeader"
import TourCard from "../../components/TourCard"
import Statistic from "../../components/Statistic"
import DestinationCard from "../../components/DestinationCard"
import watchNow from "../../assets/watchNow.png"
import checkIcon from '../../assets/check.png'

function Home() {
  return (
    <>
      <Header>
        <LoginSignup/>
      </Header>
      <main>
        <section className={styles.mainSection}>
          <img src={mainImg} alt="cologne cathedral photo" className={styles.mainImg}/>
          <SearchCard className={styles.searchCard}></SearchCard>
        </section>
        <section className={`${styles.tourSection} ${styles.section}`}>
          <SectionHeader title={'Tours'} subtitle={'Most Popular Tour'} className={styles.sectionHeader}></SectionHeader>
          <div className={styles.cards}>
            <TourCard image={mainImg} location={'Cologne, Germany'} tour={'Activies at Cologne Germany'} grade={4} reviews={10} duration={5} cost={512}></TourCard>
            <TourCard image={mainImg} location={'Cologne, Germany'} tour={'Activies at Cologne Germany'} grade={4} reviews={10} duration={5} cost={512}></TourCard>
            <TourCard image={mainImg} location={'Cologne, Germany'} tour={'Activies at Cologne Germany'} grade={4} reviews={10} duration={5} cost={512}></TourCard>
            <TourCard image={mainImg} location={'Cologne, Germany'} tour={'Activies at Cologne Germany'} grade={4} reviews={10} duration={5} cost={512}></TourCard>
          </div>
        </section>
        <div className={styles.line}></div>
        <section className={`${styles.statistics} ${styles.section}`}>
          <Statistic value={'120+'} text={'Total Destination'}/>
          <Statistic value={'500+'} text={'Travel Packages'}/>
          <Statistic value={'12k+'} text={'Total Travelers'}/>
          <Statistic value={'7k+'} text={'Positive Reviews'}/>
        </section>
        <section className={`${styles.destinations} ${styles.section}`}>
          <SectionHeader title={'Destination'} subtitle={'Top Attractions Destinations'}></SectionHeader>
          <div className={styles.destinationsGrids}>
            <div className={styles.gridsContainer}>
              <div className={styles.destinationsGrid}>
                <DestinationCard image={mainImg} travelers={124.500} destination={'Germany'}/>
                <DestinationCard image={mainImg} travelers={124.500} destination={'Germany'}/>
                <DestinationCard image={mainImg} travelers={124.500} destination={'Germany'}/>
              </div>
              <div className={`${styles.destinationsGrid} ${styles.gridSecondRow}`}>
                <DestinationCard image={mainImg} travelers={124.500} destination={'Germany'}/>
                <DestinationCard image={mainImg} travelers={124.500} destination={'Germany'}/>
              </div>
            </div>
            <div className={styles.destination}>
              <DestinationCard image={mainImg} travelers={124.500} destination={'Germany'}/>
            </div>
          </div>
        </section>
        <section className={`${styles.chooseUs} ${styles.section}`}>
          <div>
            <img src={watchNow} alt="landscapes photos" className={styles.watchNow}/>
          </div>
          <div className={styles.chooseUsContent}>
            <SectionHeader title={'Why Choose Us'} subtitle={'Our Experiences Meet High Quality Standards'} className={styles.chooseUsHeader}></SectionHeader>
            <p className={styles.chooseUsText}>Holisticly optimize proactive strategic theme areas rather than effective manufactured products create.</p>
            <div className={styles.checksRow}>
              <div>
                <div className={styles.checks}>
                  <img src={checkIcon} alt="check icon" />
                  <p>Travel Plan</p>
                </div>
                <div className={styles.checks}>
                  <img src={checkIcon} alt="check icon" />
                  <p>Hand-picked Tour</p>
                </div>
              </div>
              <div>
                <div className={styles.checks}>
                  <img src={checkIcon} alt="check icon" />
                  <p>Cheap Rates</p>
                </div>
                <div className={styles.checks}>
                  <img src={checkIcon} alt="check icon" />
                  <p>Private Guide</p>
                </div>
              </div>
            </div>
            <button className={styles.contactUsButton}>Contact Us</button>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home