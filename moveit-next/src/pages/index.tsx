import styles from '../styles/pages/Home.module.css'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { LoginForm } from '../components/LoginForm'

export default function Home() {
  return (
    <div className={styles.body}>
      <Head>
        <title>Login | move.it</title>
      </Head>
      <div className={styles.container}>
        <img src="icons/Logo.svg" alt="Logo" />
        <div>
          <strong>Bem-vindo</strong>
          <div className={styles.loginHeader}>
            <img src="icons/Github.svg" alt="logo github" />
            <p>Faça login com seu GitHub para começar</p>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
