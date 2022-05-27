import styles from './Footer.module.css'
import blogrLogo from '../../assets/images/logo.svg'

function Footer() {
  return (
    <footer className={styles.footer}>
      <h1>
        <img src={blogrLogo} alt="Blogr logo" />
      </h1>
      <div>
        <h2>Product</h2>
        <a href="#">Overview</a>
        <a href="#">Pricing</a>
        <a href="#">Marketplace</a>
        <a href="#">Features</a>
        <a href="#">Integrations</a>
      </div>

      <div>
        <h2>Company</h2>
        <a href="#">About</a>
        <a href="#">Team</a>
        <a href="#">Blog</a>
        <a href="#">Careers</a>
      </div>

      <div>
        <h2>Connect</h2>
        <a href="#">Contact</a>
        <a href="#">Newsletter</a>
        <a href="#">LinkedIn</a>
      </div>
    </footer>
  )
}

export { Footer }
