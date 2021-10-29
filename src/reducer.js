import { useSort } from './Hooks/sortArrayOfObjects'

export const reducer = (state, action) => {
  if (action.type === 'HANDLE_AVALIABILITY') {
    const { id, occupied, date } = action.payload
    const newTables = state.tables.map((item) => {
      if (item.id === id) {
        let newReservations = item.reservations
        if (date) {
          newReservations.push({
            id: new Date().getTime().toString(),
            date: date,
          })
          newReservations = newReservations.sort(useSort)
        }
        return {
          ...item,
          isOccupied: occupied,
          reservations: newReservations,
        }
      }
      return item
    })

    return {
      ...state,
      tables: newTables,
      tableInfo: 0,
      update: new Date().getTime().toString(),
    }
  }

  if (action.type === 'UPDATE_TABLE_INFO') {
    const tableInfo = state.tables.find((table) => table.id === action.payload)
    return {
      ...state,
      tableInfo: tableInfo,
    }
  }

  if (action.type === 'CHECK_RESERVATION_TIME') {
    const newTables = state.tables.map((item) => {
      if (item.reservations.length > 0) {
        let diff =
          new Date(item.reservations[0].date).getTime() - new Date().getTime()
        if (diff <= 7200000) {
          return {
            ...item,
            color: '#ec9522',
          }
        }
      }

      if (item.reservations.length > 0) {
        let diff =
          new Date(item.reservations[0].date).getTime() - new Date().getTime()
        if (diff > 7200000) {
          return {
            ...item,
            color: '#8dd84e',
          }
        }
      }

      if (item.reservations.length === 0) {
        return { ...item, color: '#8dd84e' }
      }
      return item
    })
    return { ...state, tables: newTables }
  }

  if (action.type === 'DELETE_RESERVATION') {
    const { id, tableId } = action.payload
    const newTables = state.tables.map((item) => {
      if (item.id === tableId) {
        const newReservations = item.reservations.filter(
          (item) => id !== item.id
        )
        return {
          ...item,
          reservations: newReservations,
        }
      }
      return item
    })
    return {
      ...state,
      tables: newTables,
      tableInfo: 0,
      update: new Date().getTime.toString(),
    }
  }

  if (action.type === 'TOGGLE_BURGER_MENU') {
    const toggle = !state.isBurgerMenuOpen
    console.log(toggle)
    return {
      ...state,
      isBurgerMenuOpen: toggle,
    }
  }

  throw new Error('no matching action type')
}
