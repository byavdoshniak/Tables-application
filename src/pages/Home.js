import React from 'react'
import SvgSchemeMin from '../components/SchemeMin'
import SubMenu from '../components/SubMenu'
import Table from '../components/Table'
import { useGlobalContext } from '../context'

function Home() {
  const { state } = useGlobalContext()
  return (
    <main>
      <div className='floor-plan'>
        <h1>Tables Aviliability in Sector 1:</h1>
        <div className='svg-container'>
          <SvgSchemeMin />
        </div>
      </div>
      <div className='submenu'>
        {state.tableInfo ? <SubMenu /> : <h2>Please choose a table</h2>}
      </div>
    </main>
  )
}

export default Home
