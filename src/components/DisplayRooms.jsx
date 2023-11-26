import React, { useEffect, useState } from 'react';

const DisplayRooms = () => {

  const DisplatRoom=({room})=>{

    return (
      <div>
         <h2>Selected Room Details</h2>
      <p>Name: {room.name}</p>
      <p>Price: {room.price}</p>
      </div>
    );
  }
}

export default DisplayRooms;
