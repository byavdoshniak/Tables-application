import React from 'react'
import { formatDate } from '../Hooks/formateDate'
function Table({ id, seats, sector, isOccupied, isReserved, reservations }) {
  const formattedDate = formatDate(reservations[0])
  return (
    <div className='table-container'>
      <div>Table{id}</div>
      <div>{isOccupied ? 'Table is occupied' : 'Table avaliable'}</div>
      {isReserved ? (
        <div>{`Table is reserved for ${formattedDate}`}</div>
      ) : null}
    </div>
  )
}

export default Table
