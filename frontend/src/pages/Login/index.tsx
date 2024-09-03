import Button from '../../components/Button'
import Input from '../../components/Input'
import styles from './style.module.css'
import { useNavigate } from 'react-router-dom'
import { useCreateUserWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebase/firebaseConfig'
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
          <img src={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/logoTrisog.png?alt=media&token=1117d9a5-7455-458d-b051-272ee8efb9e4'} alt="trisog logo" className={styles.logo}/>
          <h1 className={styles.title}>Sign in or Create account</h1>
          <form className={styles.form}>
            <div className={styles.inputs}>
              <div className={styles.input}>
                <label>Email</label>
                <Input icon={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/mail.png?alt=media&token=330caee7-8220-4dd2-aab0-cbc5c92cdef8'} placeholder={'Enter your email'} onChange={(e) => setEmail(e.target.value)}></Input>
              </div>
              <div className={styles.input}>
                <label>Password</label>
                <Input icon={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/lock.png?alt=media&token=2e8c5bcc-01ae-4eb8-abc4-dbe25e46397d'} type={'password'} placeholder={'Enter your password'} onChange={(e) => setPassword(e.target.value)}></Input>
              </div>
              {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
              <Button onClick={handleSignIn} className={styles.button}>Sign In</Button>
              <Button className={`${styles.signUpButton} ${styles.button}`} onClick={handleSignUp}>Sign Up</Button>
            </div>
            <div className={styles.divider}>
              <div className={styles.line}></div>
              <p>Or sign in with</p>
              <div className={styles.line}></div>
            </div>
            <div className={styles.socialButtons}>
              <Button className={`${styles.googleButton} ${styles.button}`} onClick={handleSignInGoogle}><span><img src={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/google.png?alt=media&token=5b4f67c0-bab3-41cd-825a-c6be47f2b465'} alt="google icon" />Google</span></Button>
              <Button className={`${styles.facebookButton} ${styles.button}`} onClick={handleSignInFacebook}><span><img src={'https://firebasestorage.googleapis.com/v0/b/trisog-e00b7.appspot.com/o/facebook.png?alt=media&token=9d6414d6-2da1-4294-9d5f-2c77253c2998'} alt="facebook icon" />Facebook</span></Button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Login