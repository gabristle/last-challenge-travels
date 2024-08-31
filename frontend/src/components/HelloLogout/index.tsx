import styles from './style.module.css'
import { useAuth } from '../../contexts/AuthContext'

interface HelloLogoutProps {
    image?: string
    name?: string
}

function HelloLogout({ image, name }: HelloLogoutProps) {
  const { user, logout } = useAuth()

  if(user?.displayName){
    name = user.displayName.split(' ')[0]
  } else if(user?.email){
    name = user.email.split('@')[0]
  } else {
    name = 'User'
  }

  if(user?.photoURL){
    image = user.photoURL
  }

  return (
    <div className={styles.container}>
        <div className={styles.hello}>
            {image && <img src={image} alt="user photo" />}
            {!image && <div className={styles.image}>{name.slice(0, 2)}</div>}
            <p>Hello, {name}!</p>
        </div>
        <button className={styles.logOutButton} onClick={logout}>Log Out</button>
    </div>
  )
}

export default HelloLogout