import Header from "../../components/Header"
import LoginSignup from "../../components/LoginSignup"
import SearchCard from "../../components/SearchCard"
import mainImg from "../../assets/mainImage.png"
import styles from "./style.module.css"
import SectionHeader from "../../components/SectionHeader"
import Statistic from "../../components/Statistic"
import DestinationCard from "../../components/DestinationCard"
import watchNow from "../../assets/watchNow.png"
import checkIcon from '../../assets/check.png'
import Footer from "../../components/Footer"
import Quote from "../../components/Quote"
import testimonial from "../../assets/testimonials.png"
import PostCard from "../../components/PostCard"
import travelIcon1 from '../../assets/travelIcon1.png'
import travelIcon2 from '../../assets/travelIcon2.png'
import travelIcon3 from '../../assets/travelIcon3.png'
import travelIcon4 from '../../assets/travelIcon4.png'
import travelIcon5 from '../../assets/travelIcon5.png'
import { useAuth } from '../../contexts/AuthContext';
import HelloLogout from "../../components/HelloLogout"
import TypeCaroussel from "../../components/TypeCaroussel"
import PopularToursCaroussel from "../../components/PopularToursCaroussekl"

function Home() {
  const { user } = useAuth()

  return (
    <>
      <Header>
        {user ? <HelloLogout /> : <LoginSignup/>}
      </Header>
      <main className={styles.homeContent}>
        <section className={styles.mainSection}>
          <img src={mainImg} alt="cologne cathedral photo" className={styles.mainImg}/>
          <SearchCard className={styles.searchCard}></SearchCard>
        </section>
        <section className={`${styles.tourSection} ${styles.section}`}>
          <SectionHeader title={'Tours'} subtitle={'Most Popular Tour'} className={styles.sectionHeader}></SectionHeader>
          <div className={styles.cards}>
            <PopularToursCaroussel></PopularToursCaroussel>
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
        <div className={styles.line}></div>
        <section className={`${styles.type} ${styles.section}`}>
          <SectionHeader title={'Browse By Category'} subtitle={'Pick A Tour Type'} className={styles.typeHeader}></SectionHeader>
          <div className={styles.typeCards}>
            <TypeCaroussel/>
          </div>
        </section>
        <section className={styles.testimonials}>
          <img src={testimonial} alt="travelers photo" className={styles.testimonialsImage}/>
          <div className={styles.testimonialsContent}>
            <SectionHeader title={'Testimonials'} subtitle={'What Travelers Say'}></SectionHeader>
            <Quote citation={'"The UI designs he crafted are top-notch, and the design system he integrated allows for straight forward fixes and bulk updates throughout almost every area of the app"'} author={'Molie Rosa'} occupation={'Photographer'}></Quote>
          </div>
        </section>
        <section className={styles.updates}>
          <SectionHeader title={'Updates'} subtitle={'Latest Travel Guide'} className={styles.updatesHeader}></SectionHeader>
          <div className={styles.postRow}>
            <div className={styles.postColumn}>
              <PostCard image={mainImg}></PostCard>
              <PostCard image={mainImg}></PostCard>
            </div>
            <div className={styles.postColumn}>
              <PostCard image={mainImg}></PostCard>
              <PostCard image={mainImg}></PostCard>
            </div>
          </div>
        </section>
        <section className={styles.travelIcons}>
          <img src={travelIcon1} alt="" className={styles.travelIcon1}/>
          <img src={travelIcon2} alt="" className={styles.travelIcon2}/>
          <img src={travelIcon3} alt="" className={styles.travelIcon3}/>
          <img src={travelIcon4} alt="" className={styles.travelIcon4}/>
          <img src={travelIcon5} alt="" className={styles.travelIcon5}/>
        </section>
        <Footer></Footer>
      </main>
    </>
  )
}

export default Home