import React, { useContext, useReducer, useEffect } from 'react'
import data from './data'
import { reducer } from './reducer'

const AppContext = React.createContext()

const defaultState = {
  tables: data,
  isLoading: false,
  tableInfo: 0,
  update: '',
  isBurgerMenuOpen: false,
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState)

  const handleAvaliability = (formData) => {
    dispatch({ type: 'HANDLE_AVALIABILITY', payload: formData })
  }

  const checkReservationTime = () => {
    dispatch({ type: 'CHECK_RESERVATION_TIME' })
  }

  const updateTableInfo = (id) => {
    dispatch({ type: 'UPDATE_TABLE_INFO', payload: id })
  }

  const deleteReservation = (data) => {
    dispatch({ type: 'DELETE_RESERVATION', payload: data })
    dispatch({ type: 'UPDATE_TABLE_INFO', payload: data.tableId })
  }

  const toggleBurgerMenu = () => {
    dispatch({ type: 'TOGGLE_BURGER_MENU' })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      checkReservationTime()
    }, 30000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    checkReservationTime()
  }, [state.update])

  return (
    <AppContext.Provider
      value={{
        state,
        handleAvaliability,
        updateTableInfo,
        deleteReservation,
        checkReservationTime,
        toggleBurgerMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
