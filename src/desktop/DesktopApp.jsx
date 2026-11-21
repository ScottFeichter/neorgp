import logo from '/images/logos/NeoRGB-flame-no-dark-edges.png'
import styles from './DesktopApp.module.css'

export default function DesktopApp() {
  return (
    <main className={styles.hero}>
      <div className={styles.logoRingWrap}>
        <div className={styles.logoRing}>
          <img src={logo} alt="NeoRGP logo" className={styles.logoImg} />
        </div>
      </div>
      <h1 className={styles.name}>NEO RGP</h1>
      <div className={styles.sloganWrap}>
        <span className={styles.sloganGlow} aria-hidden="true">Git Lit</span>
        <span className={styles.slogan}>Git Lit</span>
      </div>
      <p className={styles.tagline}>
        Custom AI, IT, &amp; Software Solutions
      </p>
    </main>
  )
}
