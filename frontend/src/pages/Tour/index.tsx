import Header from '../../components/Header'
import HelloLogout from '../../components/HelloLogout'
import mainImg from '../../assets/mainImage.png'
import Details from '../../components/Details'
import styles from './style.module.css'
import AverageReviews from '../../components/AverageReviews'
import ReviewCard from '../../components/ReviewCard'
import ReviewForm from '../../components/ReviewForm'
import PopularToursCaroussel from '../../components/PopularToursCaroussekl'
import Footer from '../../components/Footer'

function Tour() {
  return (
    <>
      <Header>
          <HelloLogout/>
      </Header>
      <main className={styles.main}>
        <div className={styles.mainSections}>
          <section className={styles.mainSection}>
            <section className={styles.detailsSection}>
              <img src={mainImg} alt="" className={styles.mainImage}/>
              <Details city={'Cologne'} country={'Germany'} tour={'Cologne Cathedral'} costPerPerson={512} duration={7} maxPeople={25} minAge={5} type={'Art'} reviews={12} grade={4}></Details>
              <h2 className={styles.title}>Overview</h2>
              <p className={styles.detailsText}>Istanbul, the vibrant and historic city straddling the continents of Europe and Asia, offers an enchanting blend of cultures, sights, and experiences that captivate every traveler's heart. As Turkey's cultural and economic hub, Istanbul seamlessly fuses its rich heritage with modernity, creating an unforgettable journey for visitors.</p>
              <p className={styles.detailsText}>The City is home to some of the world's most iconic landmarks, including the awe-inspiring Hagia Sophia, the majestic Blue Mosque, and the grand Topkapi Palace, each bearing witness to Istanbul's illustrious past. Wandering through the bustling streets, you'll find an array of delightful bazaars, where you can haggle for unique souvenirs, immerse yourself in the aromatic spices, and savor traditional Turkish delights.</p>
            </section>
            <section>
              <h2 className={styles.title}>Map</h2>
          
            </section>
            <section className={styles.averageReviews}>
              <h2 className={styles.title}>Average Reviews</h2>
              <AverageReviews></AverageReviews>
            </section>
            <section className={styles.reviews}>
              <h3 className={styles.subtitle}>Showing 1 review</h3>
              <ReviewCard date={'March 20, 2024'} author={'Anonimo'} reviews={1}>Objectively productivate just in time information with dynamic channels. Energistically exploit seamless growth strategies after 24/7 experiences</ReviewCard>
              <ReviewForm></ReviewForm>
            </section>
          </section>
          <aside className={styles.calculatorSection}>Calculator</aside>
        </div>
        <h1 className={styles.sectionTitle}>You may also like...</h1>
        <section className={styles.suggestion}>
            <PopularToursCaroussel></PopularToursCaroussel>  
        </section>
      </main>
      <Footer></Footer>
    </>
  )
}

export default Tour