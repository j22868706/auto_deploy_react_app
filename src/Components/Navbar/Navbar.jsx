import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import github from '../../assets/github-mark.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-logo'>By Hungchih</div>
      <ul className='nav-menu'>
        <li><Link to="/" style={{ textDecoration: 'none', color: 'black'}}>About Me</Link></li>
        <li><Link to="/certification" style={{ textDecoration: 'none', color: 'black'}}>Certificaiton</Link></li>
        <li><Link to="/skills" style={{ textDecoration: 'none', color: 'black'}}>Skills</Link></li>
        <li><Link to="/projects" style={{ textDecoration: 'none', color: 'black'}}>Projects</Link></li>
      </ul>
      <div>
        <a href="https://www.linkedin.com/in/hungchih-lee/" target="_blank" rel="noopener noreferrer">
          <img src="https://noahkagan.com/wp-content/themes/okdork-theme-2023/assets/images/icon-linkedin.svg" alt="LinkedIn" className='nav-connect' />
        </a>    
        <a href="https://github.com/j22868706" target="_blank" rel="noopener noreferrer">
          <img src={github} alt='Github' className='nav-connect'/>
        </a>
      </div>
    </div>
  )
}

export default Navbar
