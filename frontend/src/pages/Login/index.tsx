import logo from '../../assets/logoTrisog.png'
import Button from '../../components/Button'
import Input from '../../components/Input'
import styles from './style.module.css'
import googleIcon from '../../assets/google.png'
import facebookIcon from '../../assets/facebook.png'

function Login() {
  function handleChange(){

  }

  return (
    <main className={styles.loginBody}>
      <section className={styles.tourSection}>
        <div className={styles.filter}></div>
        <div className={styles.tourInfo}>
          <h1>Cologne Cathedral</h1>
          <p>Cologne, Germany</p>
        </div>
      </section>
      <section className={styles.loginSection}>
        <button className={styles.backButton}>Back to home</button>
        <div className={styles.login}>
          <img src={logo} alt="trisog logo" className={styles.logo}/>
          <h1 className={styles.title}>Sign in or Create account</h1>
          <form className={styles.form}>
            <div className={styles.inputs}>
              <div className={styles.input}>
                <label>Email</label>
                <Input placeholder={'Enter your email'} onChange={handleChange}></Input>
              </div>
              <div className={styles.input}>
                <label>Password</label>
                <Input type={'password'} placeholder={'Enter your password'} onChange={handleChange}></Input>
              </div>
              <Button>Sign In</Button>
              <Button className={styles.signUpButton}>Sign Up</Button>
            </div>
            <div className={styles.divider}>
              <div className={styles.line}></div>
              <p>Or sign in with</p>
              <div className={styles.line}></div>
            </div>
            <div className={styles.socialButtons}>
              <Button className={styles.googleButton}><span><img src={googleIcon} alt="google icon" />Google</span></Button>
              <Button className={styles.facebookButton}><span><img src={facebookIcon} alt="facebook icon" />Facebook</span></Button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Login