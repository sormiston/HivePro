import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Calendar from './Calendar/Calendar'
import TimeFilter from './TimeFilter'
import GnosticDisplay from '../Booker/TimeGnostic/GnosticDisplay'
import { getConflicts } from '../../services/CRUD'
import { Container, Box, Title, Button } from 'rbx'

export default function CheckAvail(props) {
  // passdowns from App-level
  const { currentUser, currentDate, roomsInventory, updateId } = props
  const history = useHistory()
  // controlling state to calendar and timeFilter components
  const [selectedDateTime, setSelectedDate] = useState({
    start: currentDate,
    dur: 2,
  })
  const [reducedInventory, setReducedInventory] = useState([])
  const [touched, setTouched] = useState(false)
  const updateState = (k, v) => {
    setSelectedDate((prevState) => ({
      ...prevState,
      [k]: v,
    }))
  }

  const handleClick = () => {
    if (currentUser === null) {
      console.log('handle click!')
      return history.push('/login')
    } else {
      runCheck()
    }
  }
  
  const runCheck = async () => {
  
    let conflicts = await getConflicts(
      selectedDateTime.start.format('YYYY-MM-DDTHH:00:00'),
      String(selectedDateTime.dur)
    )
    conflicts = conflicts.map((c) => c.room_id)
    setReducedInventory(
      roomsInventory.filter((r) => !conflicts.includes(r.id))
    )
    setTouched(true)
  }
  
  const buttonColor = () => {
    return !touched ? 'warning' : roomsInventory && roomsInventory.length ? 'success' : 'danger'
  }
  return (
    <Container>
      <Box>
      <Title subtitle>Check availability by date...</Title>
      <Calendar
        value={selectedDateTime.start}
        updateState={updateState}
      />
        <TimeFilter
          
      	  selectedDateTime={selectedDateTime.start}
      	  updateState={updateState}
        />
        
      </Box>
      <Button
        fullwidth={false}
        size={'large'}
        color={buttonColor()}
        onClick={handleClick}>
        Check Available
        </Button>
       
      
      {touched && (
        <Box>
          <GnosticDisplay
            currentUser={currentUser}
            selectedBooking={selectedDateTime}
            inventory={reducedInventory}
            touched={touched}
            setTouched={setTouched}
            updateId={updateId}
          />
        </Box>
      )}
    </Container>
  )
}
