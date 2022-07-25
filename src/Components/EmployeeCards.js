import React from "react";
import { Button } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import { FaHeart } from "react-icons/fa";
import { useToast } from '@chakra-ui/react'

function EmployeeCards(props) {
  const toast = useToast()
  return (
    <div className="cardOfStaff">
      <div className="imageBox">
        <img src={props.employees.img} style={{width:"260Px",height:"260px"}}/>
      </div>
      <div className="contentStaff">
        <h2 style={{fontSize:"25px"}}> {props.employees.name}</h2>
        <h5> {props.employees.job}</h5>
        <br />
        <h6> {props.employees.company}</h6>
        <br />
        <p>
          
          <Button style={{border:"none"}} href="#" variant="outlined" color="error">
          <FaHeart style={{fontize:"30Px"}} className="fav" />
          </Button>
          <Button href="#" variant="warning"  onClick={() =>
        toast({
          title: 'Sent Succesfully.',
          status: 'success',
          position: "top",
          duration: 9000,
          isClosable: true,
        })
      }>
            Send
          </Button>{" "}
          <SocialIcon style={{width:"40Px",height:"40px"}} url={props.employees.linkedin} />{" "}
        </p>
      </div>
    </div>
  );
}

export default EmployeeCards;
