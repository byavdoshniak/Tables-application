import React from 'react'
import { formatDate } from '../Hooks/formateDate'
import { useGlobalContext } from '../context'

const ReservationList = ({ reservations, tableId }) => {
  const { deleteReservation } = useGlobalContext()
  return (
    <section className='reservation-list'>
      <h4>Reservation List</h4>
      <ol>
        {reservations.map((item) => {
          const { id, date } = item
          const formattedDate = formatDate(date)
          return (
            <li key={id}>
              <span>{formattedDate}</span>
              <button
                className='btn cansel-reservation-btn'
                onClick={() => deleteReservation({ id, tableId })}
              >
                cancel reservation
              </button>
            </li>
          )
        })}
      </ol>
    </section>
  )
}

export default ReservationList
