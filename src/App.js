import "./App.css";
import JobOffers from "./Components/JobOffers";
import Employee from "./Components/Employee";
// import JobOffersAdmin from "./Components/JobOffersAdmin";
// import EmployeeAdmin from "./Components/EmployeeAdmin"
import "./Components/Assets/Style/EmployeeCards.css";
import "./Components/Assets/Style/JobOfferCards.css";
import "./Components/Assets/Style/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import { ChakraProvider, theme } from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link as RouteLink,
} from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Rigester from "./Components/Register";
import AddEmployee from './Components/AddEmployee'
import AddJopOffer from './Components/AddJobOffer'
function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Router>
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/JobOffers" element={<JobOffers />}></Route>
            <Route path="/Employees" element={<Employee />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Rigester" element={<Rigester />}></Route>
            <Route path='/AddEmployee' element={<AddEmployee/>}></Route>
            <Route path='/AddJopOffer' element={<AddJopOffer/>}></Route>
          </Routes>
          {/* <Footer /> */}
        </Router>
      </ChakraProvider>

      <Router>
        <Routes>
          <Route path={"/Dashboard"} element={<Dashboard />}></Route>
        </Routes>
      </Router>

      {/* <Dashboard/> */}
    </>
  );
}

export default App;
