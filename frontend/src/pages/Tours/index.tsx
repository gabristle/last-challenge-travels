import Header from '../../components/Header'
import HelloLogout from '../../components/HelloLogout'
import imgHeader from '../../assets/imgHeader.png'
import SearchCard from '../../components/SearchCard'
import styles from './style.module.css'
import FilterCard from '../../components/FilterCard'

function Tours() {
  return (
    <>
      <Header>
          <HelloLogout/>
      </Header>
      <main>
        <section className={styles.mainSection}>
          <img src={imgHeader} alt="cathedral of cologne" />
          <div className={styles.titleSection}>
            <h1 className={styles.mainTitle}>Tour Package</h1>
            <p><a href={'/'}>Home</a> / <a href={'/tours'} className={styles.tourLink}>Tour Package</a></p>
          </div>
          <SearchCard className={styles.searchCard}></SearchCard>
        </section>
      </main>
    </>
  )
}

export default Tours