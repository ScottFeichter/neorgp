import logo from '/images/logos/NeoRGB-flame-no-dark-edges.png'
import styles from './App.module.css'

export default function App() {
  return (
    <main className={styles.hero}>
      <div className={styles.logoRing}>
        <img src={logo} alt="NeoRGP logo" className={styles.logoImg} />
      </div>
      <h1 className={styles.name}>NEO RGP</h1>
      <p className={styles.slogan}>Git Lit</p>
      <p className={styles.tagline}>
        Custom AI, IT, &amp; Software Solutions
      </p>
    </main>
  )
}
