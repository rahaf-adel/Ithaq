import React from 'react'
import Requests from '../Requests/Requests'
import './rightside.css'

const RightSide = () => {
  return (
    <div className='rightside'>
      <h3 style={{fontSize: "25px"}}>Requests</h3>
      <Requests />
    </div>
  )
}

export default RightSide;