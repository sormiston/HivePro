const sample = require('./data.json')
// Dev
// const moment = require('moment')
//

export default function timeGnosticCheck(date, selectedBooking) {
  const { booking_hour_start, hours_booked } = selectedBooking
  
  const dtStart = date.set({ 'hour': booking_hour_start, 'minute': 0, 'second': 0 })
  const dtEnd = dtStart.clone().add(hours_booked, 'h')
  console.log(dtStart.format())
  console.log(dtEnd.format())
  
}