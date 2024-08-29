import Header from '../../components/Header'
import HelloLogout from '../../components/HelloLogout'
import mainImg from '../../assets/mainImage.png'
import Details from '../../components/Details'
import styles from './style.module.css'

function Tour() {
  return (
    <>
      <Header>
          <HelloLogout/>
      </Header>
      <main>
        <section className={styles.mainSection}>
          <section className={styles.detailsSection}>
            <img src={mainImg} alt="" className={styles.mainImage}/>
            <Details city={'Cologne'} country={'Germany'} tour={'Cologne Cathedral'} costPerPerson={512} duration={7} maxPeople={25} minAge={5} type={'Art'} reviews={12} grade={4}></Details>
            <h2 className={styles.detailsTitle}>Overview</h2>
            <p className={styles.detailsText}>Istanbul, the vibrant and historic city straddling the continents of Europe and Asia, offers an enchanting blend of cultures, sights, and experiences that captivate every traveler's heart. As Turkey's cultural and economic hub, Istanbul seamlessly fuses its rich heritage with modernity, creating an unforgettable journey for visitors.</p>
            <p className={styles.detailsText}>The City is home to some of the world's most iconic landmarks, including the awe-inspiring Hagia Sophia, the majestic Blue Mosque, and the grand Topkapi Palace, each bearing witness to Istanbul's illustrious past. Wandering through the bustling streets, you'll find an array of delightful bazaars, where you can haggle for unique souvenirs, immerse yourself in the aromatic spices, and savor traditional Turkish delights.</p>
          </section>
          <section>
            <h2 className={styles.detailsTitle}>Map</h2>
            
          </section>
        </section>
        <aside className={styles.calculatorSection}>Calculator</aside>
      </main>
    </>
  )
}

export default Tour