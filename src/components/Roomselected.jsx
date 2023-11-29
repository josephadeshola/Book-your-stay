import React from 'react'
import { useLocation } from 'react-router'

const Roomselected = () => {
    const location = useLocation()
    const roomDetails = location.state?.roomDetails;
    console.log(roomDetails);


  return (
    <div>
      
        Roomselecte
    </div>
  )
}

export default Roomselected