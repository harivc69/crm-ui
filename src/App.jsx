import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/pages/home';
import Calls from './components/pages/calls';
import Leads from './components/pages/leads';
import Enquiry from './components/pages/enquiry';
import Report from './components/pages/report';
import Loginpage from './components/pages/login_page';
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/login" element={<Loginpage/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Navigate to="/" />} />
      <Route path="/calls" element={<Calls/>} />
      <Route path="/leads" element={<Leads/>} />
      <Route path="/enquiry" element={<Enquiry/>} />
      <Route path="/report" element={<Report/>} />
    </Routes>
    </Router>
  );
}
export default App;

