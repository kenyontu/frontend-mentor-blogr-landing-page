import styled from 'styled-components/macro'

import { Footer, Header } from './components/layout'
import { DesignedFor, Hero, Info, StateOftheArt } from './components/sections'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

function App() {
  return (
    <Container>
      <Header />
      <main>
        <Hero />
        <DesignedFor />
        <StateOftheArt />
        <Info />
      </main>
      <Footer />
    </Container>
  )
}

export default App
