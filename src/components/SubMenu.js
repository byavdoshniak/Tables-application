import React, { useState, useEffect } from 'react'

import { useGlobalContext } from '../context'
import ReservationList from './ReservationList'

const SubMenu = () => {
  const { state, handleAvaliability } = useGlobalContext()
  const { tableInfo } = state
  const { id, isOccupied, reservations } = tableInfo
  const [occupied, setOccupied] = useState(isOccupied)
  const [showDateInput, setShowDateInput] = useState(true)
  const [date, setDate] = useState('')

  useEffect(() => {
    setOccupied(isOccupied)
    setShowDateInput(false)
  }, [tableInfo])

  const removeDateInput = () => {
    setDate('')
    setShowDateInput(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleAvaliability({ id, occupied, date })
    setShowDateInput(false)
    setDate('')
  }

  return (
    <>
      <section className='form-container'>
        <form onSubmit={handleSubmit}>
          <h4>Table No. {id}</h4>
          <p>
            <button
              className='btn occupied-btn'
              onClick={() => setOccupied(!occupied)}
            >
              {occupied ? 'Table is Free' : 'Table is Occupied'}
            </button>
          </p>
          <p>
            {showDateInput ? (
              <button
                className='btn cancel-btn'
                type='button'
                onClick={removeDateInput}
              >
                Cancel
              </button>
            ) : (
              <button
                type='button'
                className='btn reservation-btn'
                onClick={() => setShowDateInput(!showDateInput)}
              >
                Add Reservation
              </button>
            )}
          </p>
          <input
            className={showDateInput ? 'date-input' : 'date-input hide'}
            type='datetime-local'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <button
            type='submit'
            className={showDateInput ? 'btn submit-btn' : 'btn submit-btn hide'}
          >
            Submit
          </button>
        </form>
      </section>
      {reservations.length > 0 ? (
        <ReservationList reservations={reservations} tableId={id} />
      ) : (
        <h3>There are no reservations</h3>
      )}
    </>
  )
}

export default SubMenu
