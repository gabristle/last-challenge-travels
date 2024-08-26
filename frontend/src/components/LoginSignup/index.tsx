import styles from './style.module.css'
import userIcon from '../../assets/user.png'
import { useNavigate } from 'react-router-dom'

function LoginSignup() {
  const navigate = useNavigate()

  function handleClick() {
    navigate('/login')
  }

  return (
    <div className={styles.container} onClick={handleClick}>
        <img src={userIcon} alt="user icon" className={styles.icon}/>
        <p>Login / Signup</p>
    </div>
  )
}

export default LoginSignup