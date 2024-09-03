import Header from "../../components/Header"
import LoginSignup from "../../components/LoginSignup"
import SearchCard from "../../components/SearchCard"
import styles from "./style.module.css"
import SectionHeader from "../../components/SectionHeader"
import Statistic from "../../components/Statistic"
import Footer from "../../components/Footer"
import Quote from "../../components/Quote"
import PostCard from "../../components/PostCard"
import { useAuth } from '../../contexts/AuthContext'
import HelloLogout from "../../components/HelloLogout"
import TypeCaroussel from "../../components/TypeCaroussel"
import PopularToursCaroussel from "../../components/PopularToursCaroussel"
import Destinations from "../../components/Destinations"

function Home() {
  const { user } = useAuth()

  return (
    <>
      <Header>
        {user ? <HelloLogout /> : <LoginSignup/>}
      </Header>
      <main className={styles.homeContent}>
        <section className={styles.mainSection}>
          <img src={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/mainImage.png?alt=media&token=9a7e6336-1b15-412b-91c1-c4acadcf03bf'} alt="cologne cathedral photo" className={styles.mainImg}/>
          <div className={styles.mainText}>
            <h1 className={styles.mainTitle}>Save 15% off in Wordwide</h1>
            <h2 className={styles.mainSubtitle}>Travel & Adventures</h2>
            <p className={styles.mainDescription}>Find awesome hotel, tour, car and activities in London</p>
          </div>
          <SearchCard className={styles.searchCard}></SearchCard>
        </section>
        <section className={`${styles.tourSection} ${styles.section}`}>
          <SectionHeader title={'Tours'} subtitle={'Most Popular Tours'} className={styles.sectionHeader}></SectionHeader>
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
          <Destinations></Destinations>
        </section>
        <section className={`${styles.chooseUs} ${styles.section}`}>
          <div>
            <img src={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/watchNow.png?alt=media&token=55937769-a5ee-4a64-b7d8-bc752adf70ed'} alt="landscapes photos" className={styles.watchNow}/>
          </div>
          <div className={styles.chooseUsContent}>
            <SectionHeader title={'Why Choose Us'} subtitle={'Our Experiences Meet High Quality Standards'} className={styles.chooseUsHeader}></SectionHeader>
            <p className={styles.chooseUsText}>Holisticly optimize proactive strategic theme areas rather than effective manufactured products create.</p>
            <div className={styles.checksRow}>
              <div>
                <div className={styles.checks}>
                  <img src={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/check.png?alt=media&token=2f017aef-ec94-4a9f-9ad4-f4bf33f80a73'} alt="check icon" />
                  <p>Travel Plan</p>
                </div>
                <div className={styles.checks}>
                  <img src={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/check.png?alt=media&token=2f017aef-ec94-4a9f-9ad4-f4bf33f80a73'} alt="check icon" />
                  <p>Hand-picked Tour</p>
                </div>
              </div>
              <div>
                <div className={styles.checks}>
                  <img src={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/check.png?alt=media&token=2f017aef-ec94-4a9f-9ad4-f4bf33f80a73'} alt="check icon" />
                  <p>Cheap Rates</p>
                </div>
                <div className={styles.checks}>
                  <img src={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/check.png?alt=media&token=2f017aef-ec94-4a9f-9ad4-f4bf33f80a73'} alt="check icon" />
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
          <img src={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/testimonials.png?alt=media&token=9649e6ca-70dd-4666-a157-8e7821fb0532'} alt="travelers photo" className={styles.testimonialsImage}/>
          <div className={styles.testimonialsContent}>
            <SectionHeader title={'Testimonials'} subtitle={'What Travelers Say'}></SectionHeader>
            <Quote citation={'"The UI designs he crafted are top-notch, and the design system he integrated allows for straight forward fixes and bulk updates throughout almost every area of the app"'} author={'Molie Rosa'} occupation={'Photographer'}></Quote>
          </div>
        </section>
        <section className={styles.updates}>
          <SectionHeader title={'Updates'} subtitle={'Latest Travel Guide'} className={styles.updatesHeader}></SectionHeader>
          <div className={styles.postRow}>
            <div className={styles.postColumn}>
              <PostCard image={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/mainImage.png?alt=media&token=9a7e6336-1b15-412b-91c1-c4acadcf03bf'}></PostCard>
              <PostCard image={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/mainImage.png?alt=media&token=9a7e6336-1b15-412b-91c1-c4acadcf03bf'}></PostCard>
            </div>
            <div className={styles.postColumn}>
              <PostCard image={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/mainImage.png?alt=media&token=9a7e6336-1b15-412b-91c1-c4acadcf03bf'}></PostCard>
              <PostCard image={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/mainImage.png?alt=media&token=9a7e6336-1b15-412b-91c1-c4acadcf03bf'}></PostCard>
            </div>
          </div>
        </section>
        <section className={styles.travelIcons}>
          <img src={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/travelIcon1.png?alt=media&token=cae5cf0f-4c43-4fac-8698-72897c38cff9'} alt="" className={styles.travelIcon1}/>
          <img src={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/travelIcon2.png?alt=media&token=0964e0c9-ba44-4160-a137-08e61d0513e2'} alt="" className={styles.travelIcon2}/>
          <img src={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/travelIcon3.png?alt=media&token=b1010e10-c8ac-4894-bb9d-6fd464c3e7ac'} alt="" className={styles.travelIcon3}/>
          <img src={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/travelIcon4.png?alt=media&token=0d096166-ae8e-41ac-a597-0202a1b31a0f'} alt="" className={styles.travelIcon4}/>
          <img src={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/travelIcon5.png?alt=media&token=db5434cb-d755-4065-9cf8-4f65300b8176'} alt="" className={styles.travelIcon5}/>
        </section>
      </main>
      <Footer></Footer>
    </>
  )
}

export default Home