// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Beachfront from './Components/Beachfront';
import Lakefront from './Components/Lakefront';
import Iconiccities from './Components/Iconiccities';
import Hillside from './Components/Hillside';
import Amazingpools from './Components/Amazingpools';
import Island from './Components/Island';
// import Login from './Components/Login';
import BeachAbt from './Components/BeachAbt';
import BookingForm from './Components/BookingForm';
import Landingpage from './Components/Landingpage';
import BookedDates from './Components/BookedDates';
import LakeAbt from './Components/LakeAbt';
import Iconicabt from './Components/Iconicabt';
import BeachAbtt from './Components/BeachAbtt';
import Hillsabt from './Components/Hillsabt';
import Poolabt from './Components/Poolabt';
import IslandResortAbout from './Components/IslandResortAbout';
import IslandResortAboutt from './Components/IslandResortAboutt';
const ProtectedRoute = ({ component, ...args }) => {
  const Component = withAuthenticationRequired(component, args);
  return <Component />;
};



const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Landingpage/>} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/Home" element={<ProtectedRoute component={Home} />} />
   
      <Route path="/Beachfront" element={<Beachfront/>} />
      <Route path="/Lakefront" element={<Lakefront/>} />
      <Route path="/Iconiccities" element={<Iconiccities/>} />
      <Route path="/Hillside" element={<Hillside/>} />
      <Route path="/Amazingpools" element={<Amazingpools/>} />
      <Route path="/Island" element={<Island/>} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/BeachAbt" element={<BeachAbt/>} />
      <Route path="/BookingForm" element={<BookingForm/>} />
      <Route path="/BookedDates" element={<BookedDates/>} />
      <Route path="/LakeAbt" element={<LakeAbt/>} />
      <Route path="/Iconicabt" element={<Iconicabt/>} />
      <Route path="/BeachAbtt" element={<BeachAbtt/>} />
      <Route path="//HillsideResort/:id" element={<Hillsabt/>} />
      <Route path="//Poolabt" element={<Poolabt/>} />
      <Route path="/IslandResortAbout" element={<IslandResortAbout/>} />
      <Route path="/IslandResortAboutt" element={<IslandResortAboutt/>} />

      
    </Routes>
  </Router>
  )
}

export default App



