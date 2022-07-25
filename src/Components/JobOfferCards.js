import React from "react";
import { Button } from "react-bootstrap";
import { useToast } from '@chakra-ui/react'

function JobOfferCards(props) {
  const toast = useToast()
  return (
    <>
      <div class="jobOffercard">
        <div className="innerCard">
          <h3 style={{fontSize: "20px"}}>{props.jobs.job}</h3>
          <br/>
          <p>{props.jobs.description}</p>
          <br/>
          <Button href="#"  variant="warning" onClick={() =>
        toast({
          title: 'Sent Succesfully.',
          status: 'success',
          position: "top",
          duration: 9000,
          isClosable: true,
        })
      }>
            Apply
          </Button>{" "}
        </div>
        <div class="cover">
          <div class="coverBack"></div>
          <div class="coverFront">
            <div>
              <h5>{props.jobs.job}</h5>
              <img src={props.jobs.img} class="sh_img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobOfferCards;
