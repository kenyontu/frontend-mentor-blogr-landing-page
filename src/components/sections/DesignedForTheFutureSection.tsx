import styles from './DesignedForTheFutureSection.module.css'
import editorImage from '../../assets/images/illustration-editor-mobile.svg'
import { TopicHeader } from './TopicHeader'
import { TopicMessage } from './TopicMessage'
import { SectionHeader } from './SectionHeader'

function DesignedForTheFutureSection() {
  return (
    <section className={styles.section}>
      <SectionHeader>Designed for the future</SectionHeader>
      <img className={styles.image} src={editorImage} alt="" />
      <div className={styles.infoContainer}>
        <TopicHeader>Introducing an extensible editor</TopicHeader>
        <TopicMessage>
          Blogr features an exceedingly intuitive interface which lets you focus
          on one thing: creating content. The editor supports management of
          multiple blogs and allows easy manipulation of embeds such as images,
          videos, and Markdown. Extensibility with plugins and themes provide
          easy ways to add functionality or change the looks of a blog.
        </TopicMessage>
        <TopicHeader>Robust content management</TopicHeader>
        <TopicMessage>
          Flexible content management enables users to easily move through
          posts. Increase the usability of your blog by adding customized
          categories, sections, format, or flow. With this functionality, you’re
          in full control.
        </TopicMessage>
      </div>
    </section>
  )
}

export { DesignedForTheFutureSection }
