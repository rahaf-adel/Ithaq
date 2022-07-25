import React , {useState,useEffect} from "react";
import SDAIA from "./Assets/Images/SdaiaLogo.png";
import STC from "./Assets/Images/STC.png";
import SFCPD from "./Assets/Images/SAFCSPLogo.png";
import MCIT from "./Assets/Images/MOCITLogo.png";
import { CardGroup } from "react-bootstrap";
import Cards from "./JobOfferCards";
import Header from './Header'
import Footer from './Footer'
import axios from 'axios'

function JobOffers() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://62d3e391cd960e45d44f818f.mockapi.io/jobOffer")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // const jobOffers = [
  //   {
  //     img: SDAIA,
  //     company: "SDAIA",
  //     job: "Front End Developer",
  //     description: "Responsible for developing new user-facing features, determining the structure and design of web pages, building reusable codes, optimizing page loading times, and using a variety of markup languages to create the web pages.",
  //   },
  //   {
  //     img: STC,
  //     company: "STC",
  //     job: "Back End Developer",
  //     description: "Responsible for  creates components and features on the server-side, indirectly accessed by a user through a front end application or system. ",
  //   },
  //   {
  //     img: SFCPD,
  //     company: "SAUDI FEDERATION FOR CYBERSECURITY, PROGRAMMING & DRONES",
  //     job: "Full Stack Developer",
  //     description: "responsible for working on both front-end and back-end development processes",
  //   },
  //   {
  //     img: MCIT,
  //     company: "MINISTRY OF COMMUNICATIONS AND INFORMATION TECHNOLOGY",
  //     job: "Software Engineer",
  //     description: "Responsible for  designs and builds computer programs that power mobile devices and desktop computers.",
  //   },
  //   {
  //       img: MCIT,
  //       company: "MINISTRY OF COMMUNICATIONS AND INFORMATION TECHNOLOGY",
  //       job: "Software Engineer",
  //       description: "Responsible for  designs and builds computer programs that power mobile devices and desktop computers.",
  //     },
  //     {
  //       img: MCIT,
  //       company: "MINISTRY OF COMMUNICATIONS AND INFORMATION TECHNOLOGY",
  //       job: "Software Engineer",
  //       description: "Responsible for  designs and builds computer programs that power mobile devices and desktop computers.",
  //     },
  //     {
  //       img: STC,
  //       company: "STC",
  //       job: "Back End Developer",
  //       description: "Responsible for  creates components and features on the server-side, indirectly accessed by a user through a front end application or system. ",
  //     },
  //     {
  //       img: SFCPD,
  //       company: "SAUDI FEDERATION FOR CYBERSECURITY, PROGRAMMING & DRONES",
  //       job: "Full Stack Developer",
  //       description: "responsible for working on both front-end and back-end development processes",
  //     },
  // ];
  const jobOffersList = data.map((value) => <Cards jobs={value} />);
  return (
    <>
    <Header/>
      <CardGroup>
          <div className="containerOfStaff">{jobOffersList}</div>
      </CardGroup>
      <Footer/>
    </>
  );
}

export default JobOffers;
