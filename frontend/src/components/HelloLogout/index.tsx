import styles from './style.module.css'

interface HelloLogoutProps {
    image?: string
    name: string
}

function HelloLogout({ image, name }: HelloLogoutProps) {
  return (
    <div className={styles.container}>
        <div className={styles.hello}>
            {image && <img src={image} alt="user photo" />}
            {!image && <div className={styles.image}>{name.slice(0, 2)}</div>}
            <p>Hello, {name}!</p>
        </div>
        <button className={styles.logOutButton}>Log Out</button>
    </div>
  )
}

export default HelloLogout