import styles from './style.module.css'
import userIcon from '../../assets/user.png'

function LoginSignup() {
  return (
    <div className={styles.container}>
        <a href=""><img src={userIcon} alt="user icon" className={styles.icon}/></a>
        <p>Login / Signup</p>
    </div>
  )
}

export default LoginSignup