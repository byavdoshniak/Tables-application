export const useSort = (a, b) => {
  if (a.date > b.date) {
    return 1
  }
  if (a.date < b.date) {
    return -1
  }
  return 0
}
