import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import SectionWrapper from './components/SectionWrapper'

function App() {
  const [serverStatus, setServerStatus] = useState(false)

  // Keep the check to background server silently to log status
  // Keep the check to background server silently to log status
  useEffect(() => {
    axios.get('/api')
      .then(() => setServerStatus(true))
      .catch(() => setServerStatus(false))
  }, [])

  return (
    <div className="App">
      <Header />
      <SectionWrapper>
        <Hero />
      </SectionWrapper>

      <SectionWrapper>
        <Stats />
      </SectionWrapper>

      <SectionWrapper>
        <Experience />
      </SectionWrapper>

      <SectionWrapper>
        <Education />
      </SectionWrapper>

      <SectionWrapper>
        <Projects />
      </SectionWrapper>

      <SectionWrapper>
        <Contact />
      </SectionWrapper>
    </div>
  )
}

export default App
