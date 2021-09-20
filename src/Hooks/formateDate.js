export const formatDate = (arg) => {
  const date = new Date(arg)
  let mm = date.getMonth()
  switch (mm) {
    case 0:
      mm = 'January'
      break
    case 1:
      mm = 'February'
      break
    case 2:
      mm = 'March'
      break
    case 3:
      mm = 'April'
      break
    case 4:
      mm = 'May'
      break
    case 5:
      mm = 'June'
      break
    case 6:
      mm = 'July'
      break
    case 7:
      mm = 'August'
      break
    case 8:
      mm = 'September'
      break
    case 9:
      mm = 'October'
      break
    case 10:
      mm = 'November'
      break
    case 11:
      mm = 'December'
      break

    default:
      mm = `no month`
      break
  }
  let dd = date.getDate()
  if (dd < 10) dd = `0${dd}`
  let day = date.getDay()
  switch (day) {
    case 0:
      day = 'Sunday'
      break
    case 1:
      day = 'Monday'
      break
    case 2:
      day = 'Tuesday'
      break
    case 3:
      day = 'Wednesday'
      break
    case 4:
      day = 'Thursday'
      break
    case 5:
      day = 'Friday'
      break
    case 6:
      day = 'Saturday'
      break

    default:
      day = `no day`
      break
  }
  let hh = date.getHours()
  if (hh < 10) hh = `0${hh}`
  let minutes = date.getMinutes()
  if (minutes < 10) minutes = `0${minutes}`
  const formattedDate = `${dd} ${mm}, ${day} ${hh}:${minutes}`
  return formattedDate
}
