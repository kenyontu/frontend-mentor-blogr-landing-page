import styles from './HeroSection.module.css'
import { Button } from '../Button'

function HeroSection() {
  return (
    <section className={styles.container}>
      <h1>A modern publishing platform</h1>
      <p>Grow your audience and build your online brand</p>
      <div>
        <Button className={styles.button}>Start for Free</Button>
        <Button className={styles.button} outlined>
          Learn More
        </Button>
      </div>
    </section>
  )
}

export { HeroSection }
