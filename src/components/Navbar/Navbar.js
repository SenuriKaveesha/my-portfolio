import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import {Link} from 'react-scroll';
import contactImg from '../../assets/contact.png'

const Navbar = () => {
  return (
<div>
     <nav className='navbar'>
        <img src={logo} alt='logo' className='logo'/>
        <div className='desktopMenu'>
            <Link activeClas= 'active' to='intro' spy={true} offset={-100} duration={500} className='desktopMenuItem'>Home</Link>
            <Link activeClas= 'active' to='skills' spy={true} offset={-100} duration={500} className='desktopMenuItem'>About</Link>
            <Link activeClas= 'active' to='works' spy={true} offset={-100} duration={500} className='desktopMenuItem'>Portfolio</Link>
        </div>
        <button className='desktopMenuBtn' onClick={() => {
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
            <img src={contactImg} alt='' className='desktopMenuIcon'/> Contact me
        </button>
     </nav    >
    </div>
  )
}

export default Navbar

