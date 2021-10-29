import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import BurgerMenu from './BurgerMenu'
import { useGlobalContext } from '../context'

function Navbar() {
  const { toggleBurgerMenu } = useGlobalContext()
  return (
    <nav>
      <div className='nav-center'>
        <div className='app-name'>Tables</div>
        <div className='links-container'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/'>Other Projects</Link>
        </div>
        <button className='burger-menu-btn' onClick={toggleBurgerMenu}>
          <FaBars />
        </button>
        <BurgerMenu />
      </div>
    </nav>
  )
}

export default Navbar
