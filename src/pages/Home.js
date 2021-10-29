import React from 'react'
import { useState } from 'react'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import Sector1Scheme from '../components/Sector1Scheme'
import Sector2Scheme from '../components/Sector2Scheme'
import SubMenu from '../components/SubMenu'
import { useGlobalContext } from '../context'

function Home() {
  const [sector, setSector] = useState(1)
  const { state } = useGlobalContext()
  return (
    <main>
      <div className='floor-plan'>
        <h1>Tables Aviliability in Sector {sector}:</h1>
        <div className='svg-container'>
          {sector === 1 ? <Sector1Scheme /> : <Sector2Scheme />}
        </div>
        <div className='btn-container'>
          {sector === 1 ? (
            <button
              className='btn sector-btn'
              onClick={() => setSector(sector + 1)}
            >
              Next Sector
              <FaChevronRight />
            </button>
          ) : (
            <button
              className='btn sector-btn'
              onClick={() => setSector(sector - 1)}
            >
              <FaChevronLeft />
              Previous Sector
            </button>
          )}
        </div>
      </div>
      <div className='submenu'>
        {state.tableInfo ? <SubMenu /> : <h2>Please choose a table</h2>}
      </div>
    </main>
  )
}

export default Home
