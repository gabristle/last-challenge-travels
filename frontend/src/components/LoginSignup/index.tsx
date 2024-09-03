import styles from './style.module.css'

import { useNavigate } from 'react-router-dom'

function LoginSignup() {
  const navigate = useNavigate()

  function handleClick() {
    navigate('/login')
  }

  return (
    <div className={styles.container} onClick={handleClick}>
        <img src={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/user.png?alt=media&token=560e6963-fd56-4d65-aad1-2bddea9a62de'} alt="user icon" className={styles.icon}/>
        <p>Login / Signup</p>
    </div>
  )
}

export default LoginSignup