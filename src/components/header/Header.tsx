import styles from './Header.module.css'
import { Logo } from './Logo'
import { NavigationMenu } from './NavigationMenu'

function Header() {
  return (
    <header className={styles.container}>
      <Logo className={styles.logo} />
      <NavigationMenu />
    </header>
  )
}

export { Header }
