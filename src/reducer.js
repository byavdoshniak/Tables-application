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
    }
  }

  if (action.type === 'UPDATE_TABLE_INFO') {
    const showSubMenu = true
    const tableInfo = state.tables.find((table) => table.id === action.payload)
    return {
      ...state,
      showSubMenu: showSubMenu,
      tableInfo: tableInfo,
    }
  }

  if (action.type === 'CHECK_RESERVATION_TIME') {
    console.log('hello')
  }

  if (action.type === 'ADD_RESERVATION') {
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
    }
  }

  throw new Error('no matching action type')
}
