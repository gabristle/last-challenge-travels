import Footer from "../../components/Footer"
import Header from "../../components/Header"
import HelloLogout from "../../components/HelloLogout"
import LoginSignup from "../../components/LoginSignup"
import { useAuth } from "../../contexts/AuthContext"
import styles from './style.module.css'
import Button from "../../components/Button"
import { useNavigate } from "react-router-dom"

function Error() {
  const { user } = useAuth()
  const navigate = useNavigate()

  function handleNavigate() {
    navigate('/')
  }
  
  return (
    <>
      <Header>
        {user ? <HelloLogout /> : <LoginSignup/>}
      </Header>
      <main className={styles.main}>
        <div className={styles.mainContent}>
          <img src={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/map.png?alt=media&token=622134e5-862e-4698-a48b-23fdcd83ff53'} alt="map" className={styles.mapIcon}/>
          <h1 className={styles.title}>Error 404</h1>
          <p className={styles.subtitle}>Page not fund!</p>
          <Button onClick={handleNavigate}>Back to home</Button>
        </div>     
      </main>
      <Footer>
      </Footer>
    </>
  )
}

export default Error