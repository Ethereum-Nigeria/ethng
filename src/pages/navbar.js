import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ToggleContext } from '../contexts/toggle'

import Hamburger from './hamburger'


const Navbar = () => {
  const { toggleNav, isNavToggle } = useContext(ToggleContext)


  return (
    <>
      <nav className={isNavToggle ? 'show-bar' : 'hide-bar'}> 
        <ul className='navlinks'> 
          
          <li><NavLink to='/'>Home</NavLink> </li>
          <li><NavLink to='/about'>About</NavLink> </li>
          <li><NavLink to='/contact'>Contact</NavLink> </li>
        </ul>
      </nav>
      <Hamburger toggleNav={toggleNav} />
    </>
  )
}

export default Navbar
