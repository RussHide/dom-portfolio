import {About, Main, Skills, Education, Contact, Projects} from './container'
import {Navbar} from './components'
function App() {

  return (
   <div>
     <Navbar/>
     <Main/>
     <About/>
     <Education/>
     <Skills/>
     <Projects/>
     <Contact/>
   </div>
  )
}

export default App
