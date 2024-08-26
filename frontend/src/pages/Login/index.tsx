import logo from '../../assets/logoTrisog.png'
import Button from '../../components/Button'
import Input from '../../components/Input'
import styles from './style.module.css'
import googleIcon from '../../assets/google.png'
import facebookIcon from '../../assets/facebook.png'
import { useNavigate } from 'react-router-dom'
import mailIcon from '../../assets/mail.png'
import lockIcon from '../../assets/lock.png'
import { useCreateUserWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebaseConfig'
import { useState } from 'react'

function Login() {
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [
    createUserWithEmailAndPassword
  ] = useCreateUserWithEmailAndPassword(auth)
  const [
    signInWithEmailAndPassword
  ] = useSignInWithEmailAndPassword(auth)
  const [signInWithGoogle] = useSignInWithGoogle(auth)
  const [signInWithFacebook] = useSignInWithFacebook(auth)

  const navigate = useNavigate()

  function handleSignUp(e: React.MouseEvent<HTMLButtonElement>) {
    if(!email || !password) return setErrorMessage('preencha')
    e.preventDefault()
    createUserWithEmailAndPassword(email, password);
  }

  function handleSignIn(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    if(!email || !password){
      setErrorMessage('Please fill in all fields')
    } else if(email && password){
      signInWithEmailAndPassword(email, password)
    }
  }

  function handleSignInGoogle(e: React.MouseEvent<HTMLButtonElement>){
    e.preventDefault()
    signInWithGoogle()
  }

  function handleSignInFacebook(e: React.MouseEvent<HTMLButtonElement>){
    e.preventDefault()
    signInWithFacebook()
  }

  function handleBack() {
    navigate('/')
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
        <button className={styles.backButton} onClick={handleBack}>Back to home</button>
        <div className={styles.login}>
          <img src={logo} alt="trisog logo" className={styles.logo}/>
          <h1 className={styles.title}>Sign in or Create account</h1>
          <form className={styles.form}>
            <div className={styles.inputs}>
              <div className={styles.input}>
                <label>Email</label>
                <Input icon={mailIcon} placeholder={'Enter your email'} onChange={(e) => setEmail(e.target.value)}></Input>
              </div>
              <div className={styles.input}>
                <label>Password</label>
                <Input icon={lockIcon} type={'password'} placeholder={'Enter your password'} onChange={(e) => setPassword(e.target.value)}></Input>
              </div>
              {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
              <Button onClick={handleSignIn}>Sign In</Button>
              <Button className={styles.signUpButton} onClick={handleSignUp}>Sign Up</Button>
            </div>
            <div className={styles.divider}>
              <div className={styles.line}></div>
              <p>Or sign in with</p>
              <div className={styles.line}></div>
            </div>
            <div className={styles.socialButtons}>
              <Button className={styles.googleButton} onClick={handleSignInGoogle}><span><img src={googleIcon} alt="google icon" />Google</span></Button>
              <Button className={styles.facebookButton} onClick={handleSignInFacebook}><span><img src={facebookIcon} alt="facebook icon" />Facebook</span></Button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Login