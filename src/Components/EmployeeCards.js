import React from "react";
import { Button } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import { FaHeart } from "react-icons/fa";
import { useToast } from '@chakra-ui/react'
import axios from "axios"

function EmployeeCards(props) {
  const sendRequest =(id)=>{
    axios.post(`http://127.0.0.1:8000/emp/add_req/${id}`, {}, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    // toast({
    //   title: 'Sent Succesfully.',
    //   status: 'success',
    //   position: "top",
    //   duration: 9000,
    //   isClosable: true,
    // })
    .then((response)=>{
      console.log(response.data);
      alert(response.data.msg)
    })
    .catch((err) => { 
      console.log(err.response.data.msg)
      alert(err.response.data.msg)
    })
  }
  
  // const toast = useToast()
  return (
    <div className="cardOfStaff">
      <div className="imageBox">
        <img src={props.employees.avatar} style={{width:"260Px",height:"260px"}} alt=""/>
      </div>
      <div className="contentStaff">
        <h2 style={{fontSize:"25px"}}> {props.employees.name}</h2>
        <h5> {props.employees.position}</h5>
        <br />
        <h6> {props.employees.company.name}</h6>
        <br />
        <p>
          
          <Button style={{border:"none"}} href="#" variant="outlined" color="error">
          <FaHeart style={{fontize:"30Px"}} className="fav" />
          </Button>
          <Button href="#" variant="warning"  onClick={()=>sendRequest(props.employees.id)}>
            Send
          </Button>{" "}
          
          <SocialIcon style={{width:"40Px",height:"40px"}} url={props.employees.linkedin} />{" "}
        </p>
      </div>
    </div>
  );
}

export default EmployeeCards;
