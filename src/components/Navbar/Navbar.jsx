import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTerminal } from '@fortawesome/free-solid-svg-icons'

import './Navbar.scss'
const Nabvar = () => {
  const nav = [
    'About', 'Education', 'Skills', 'Projects', 'Contact Me'
  ]
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-base'>
        <div className='app__navbar-icon-box'>
          <FontAwesomeIcon icon={faTerminal} />
          <p>Cristian Dominguez</p>
        </div>
        <div className='app__navbar-link-box'>
          <ul>
            {
              nav.map(x => (
                <li key={x}>{x}</li>
              ))
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nabvar