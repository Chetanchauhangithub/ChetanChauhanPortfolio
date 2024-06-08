import styles from './App.module.css'
import About from './components/About/About'
import { Contact } from './components/Contact/Contact'
import Experience from './components/Experience/Experience'
import Hero from './components/Hero/Hero'
import Leetcode from './components/Leetcode/Leetcode'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import ReactGA from 'react-ga4'
import { MEASUREMENT_ID_GOOGLE_ANALYTICS } from './links/links'


ReactGA.initialize(MEASUREMENT_ID_GOOGLE_ANALYTICS);

function App() {

  return (
    <div className={styles.App} >
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <Leetcode/>
      <Contact/>
    </div>
  )
}

export default App
