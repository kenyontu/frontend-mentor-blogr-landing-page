import styles from './InfoSection.module.css'
import { TopicHeader } from './TopicHeader'
import { TopicMessage } from './TopicMessage'
import laptopImage from '../../assets/images/illustration-laptop-mobile.svg'

function InfoSection() {
  return (
    <section className={styles.section}>
      <img className={styles.image} src={laptopImage} alt="" />
      <div className={styles.infoContainer}>
        <TopicHeader className={styles.header}>Free, open, simple</TopicHeader>
        <TopicMessage>
          Blogr is a free and open source application backed by a large
          community of helpful developers. It supports features such as code
          syntax highlighting, RSS feeds, social media integration, third-party
          commenting tools, and works seamlessly with Google Analytics. The
          architecture is clean and is relatively easy to learn.
        </TopicMessage>
        <TopicHeader>Powerful tooling</TopicHeader>
        <TopicMessage>
          Batteries included. We built a simple and straightforward CLI tool
          that makes customization and deployment a breeze, but capable of
          producing even the most complicated sites.
        </TopicMessage>
      </div>
    </section>
  )
}

export { InfoSection }
