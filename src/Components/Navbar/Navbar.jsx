import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import github from '../../assets/github-mark.png'
import menuopen from '../../assets/menu-open.png'
import menuclose from '../../assets/menu-close.png'


const Navbar = () => {

  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.right='0';
  }
  const closeMenu = () => {
    menuRef.current.style.right='-400px';
  }

  return (
    <div className='navbar'>
      <div className='nav-logo'>Hungchih</div>
      <img src={menuopen} onClick={openMenu} alt='menuopen'className='nav-mob-open'/>
      <ul ref={menuRef} className='nav-menu'>
        <img src={menuclose} onClick={closeMenu} alt='menuclose' className='nav-mob-close'/>
        <li><Link to="/" style={{ textDecoration: 'none', color: 'black'}}>About Me</Link></li>
        <li><Link to="/certification" style={{ textDecoration: 'none', color: 'black'}}>Certificaiton</Link></li>
        <li><Link to="/skills" style={{ textDecoration: 'none', color: 'black'}}>Skills</Link></li>
        <li><Link to="/projects" style={{ textDecoration: 'none', color: 'black'}}>Projects</Link></li>
        <a href="https://www.linkedin.com/in/hungchih-lee/" target="_blank" rel="noopener noreferrer">
          <img src="https://noahkagan.com/wp-content/themes/okdork-theme-2023/assets/images/icon-linkedin.svg" alt="LinkedIn" className='nav-connect' />
        </a>    
        <a href="https://github.com/j22868706" target="_blank" rel="noopener noreferrer">
          <img src={github} alt='Github' className='nav-connect'/>
        </a>
      </ul>
      <div>

      </div>
    </div>
  )
}

export default Navbar
