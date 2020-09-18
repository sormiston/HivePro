// CALENDAR FUNCTION from LIVE TUTORIAL CODE-ALONG
// credit Mark Tellez - "devmentorlive"
// https://www.youtube.com/watch?v=5jRrVqRWqsM

export default function buildCalendar(value) {
  const startDay = value.clone().startOf('month').startOf('week')
  const endDay = value.clone().endOf('month').endOf('week')
  
  const day = startDay.clone().subtract(1, 'day')
  const calendar = []
  while (day.isBefore(endDay, 'day')) {
    calendar.push(
      Array(7)
        .fill(0)
        .map(() => day.add(1, 'day').clone()) // why is clone necessary here if .add increments day object?
    )
  } 
  
  return calendar
}