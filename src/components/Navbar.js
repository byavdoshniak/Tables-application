import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <div className='nav-center'>
        <div className='app-name'>Tables</div>
        <div className='links-container'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/'>Other Projects</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
