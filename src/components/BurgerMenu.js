import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'

function BurgerMenu() {
  const { state } = useGlobalContext()

  return (
    <aside
      className={state.isBurgerMenuOpen ? 'burger-menu show' : 'burger-menu'}
    >
      <div className='side-links-container'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/'>Other Projects</Link>
      </div>
    </aside>
  )
}

export default BurgerMenu
