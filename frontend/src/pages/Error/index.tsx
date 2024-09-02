import Footer from "../../components/Footer"
import Header from "../../components/Header"
import HelloLogout from "../../components/HelloLogout"
import LoginSignup from "../../components/LoginSignup"
import { useAuth } from "../../contexts/AuthContext"
import mapIcon from '../../assets/map.png'
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
          <img src={mapIcon} alt="map" className={styles.mapIcon}/>
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