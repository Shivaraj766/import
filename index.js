const addDays = require('date-fns/addDays')
function getDateAfterDays(d) {
  let newDate = addDays(new Date(2020, 7, 20), d)
  return `${newDate.getDate()} -${newDate.getMonth() + 1} -${newDate.getFullYear()}`
  
}
module.exports = getDateAfterDays
