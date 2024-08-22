import styles from './style.module.css'

interface PostCardProps {
    image: string
}

function PostCard({ image }: PostCardProps) {
  return (
    <div className={styles.postContainer}>
        <img src={image} alt={`representation of post`}/>
        <div className={styles.postInfos}>
            <div className={styles.infoRow}>
                <p className={styles.date}>July 13, 2023</p>
                <p><span className={styles.span}>·</span> Admin</p>
            </div>
            <h3 className={styles.title}>The impact of Covid-19 on travel & tourism industry</h3>
        </div>
    </div>
  )
}

export default PostCard