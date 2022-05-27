import styles from './StateOfTheArtSection.module.css'
import phoneImage from '../../assets/images/illustration-phones.svg'
import { TopicMessage } from './TopicMessage'

function StateOfTheArtSection() {
  return (
    <section className={styles.section}>
      <img className={styles.image} src={phoneImage} alt="" />
      <h1 className={styles.header}>State of the Art Infrastructure</h1>
      <TopicMessage className={styles.message}>
        With reliability and speed in mind, worldwide data centers provide the
        backbone for ultra-fast connectivity. This ensures your site will load
        instantly, no matter where your readers are, keeping your site
        competitive.
      </TopicMessage>
    </section>
  )
}

export { StateOfTheArtSection }
