import React from "react";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import logo from "./Assets/Images/IthaqLogo.png";
import { NavLink } from 'react-router-dom';
function Navbars() {
  const nav =[
    {label:"Home",
  href:"/Home"}
  ]
  const navLogin=[
    {label:"Employee",
  href:"/Employees"},
    {label:"Job Offer",
  href:"/JobOffers"}
  ]
  return (
    <>
          <Navbar bg="light" expand="lg">
              <Navbar.Brand style={{marginLeft:"20px"}} href="/">
                <img
                  src={logo}
                  width="90"
                  height="90"
                  style={{ borderRadius: "50%" }}
                  className="d-inline-block align-top"
                />
              </Navbar.Brand>
              <Navbar.Toggle style={{marginRight:"20px"}}  aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="container-fluid">
                  {/* <Nav.Link as={NavLink} to='/'>Home</Nav.Link> */}
                  {localStorage.getItem("isLogin") ? (
                     navLogin.map(value=><Nav.Link as={NavLink} to= {value.href}>{value.label}</Nav.Link>)
                    
                // <Nav.Link as={NavLink} to='/JobOffers'>Job Offer</Nav.Link> ,
                //  <Nav.Link as={NavLink} to='/Employees'>Empolyee</Nav.Link>
            ): (
              // <Nav.Link as={NavLink} to='/JobOffers'>Job Offer</Nav.Link>
              nav.map(value=><Nav.Link as={NavLink} to= {value.href}>{value.label}</Nav.Link>)
            )}
                  
                </Nav>
                {localStorage.getItem("isLogin")?(
                <Button style={{marginRight:"20px"}}  as={NavLink} to='/Dashboard'variant="secondary">Dashboard</Button>):(
                 <Button as={NavLink} to={'/login'}variant="warning"> Login</Button>
                )
                }
              
              </Navbar.Collapse>
          </Navbar>
             </>
  );
}

export default Navbars;