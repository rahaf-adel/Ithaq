import React from 'react'
import './requests.css'
import {RequestData} from '../../Assets/Data/Data';

const Requests = () => {
  return (
    <div className="requests">
      <h3 style={{fontSize: "25px"}}>Requests</h3>
      {RequestData.map((request) => {
        return (
          <div className="request">
            <img src={request.img} alt="profile" />
            <div className="noti">
              <div  style={{marginBottom: '0.5rem'}}>
                <span>{request.name}</span>
                <span> {request.noti}</span>
              </div>
                <span>{request.time}</span>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default Requests