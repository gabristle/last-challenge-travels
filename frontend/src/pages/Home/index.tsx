import Header from "../../components/Header"
import LoginSignup from "../../components/LoginSignup"
import SearchCard from "../../components/SearchCard"
import mainImg from "../../assets/mainImage.png"
import styles from "./style.module.css"

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
      </main>
    </>
  )
}

export default Home