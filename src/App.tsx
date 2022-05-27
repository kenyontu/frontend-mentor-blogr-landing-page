import styles from './App.module.css'

import { Header } from './components/header'
import {
  HeroSection,
  DesignedForTheFutureSection,
  StateOfTheArtSection,
  InfoSection,
} from './components/sections'
import { Footer } from './components/footer'

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <HeroSection />
        <DesignedForTheFutureSection />
        <StateOfTheArtSection />
        <InfoSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
