import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css';
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import ForgetPasswordPage from './components/ForgetPasswordPage'
import HomePage from './components/HomePage'
import VisitSched from './components/VisitSched'
import Crf from './components/Crf'

const App = () => {
  return (
    <Router>
      <div>
          <Routes>
              <Route exact path="/" element={ <LoginPage/> } />
              <Route path="/login" element={ <LoginPage/> }  />
              <Route path="/register" element={ <RegisterPage/> } />
              <Route path="/forget-password" element={ <ForgetPasswordPage/> } />
              <Route path="/home" element={ <HomePage/> } />
              <Route path="/visitsched" element={ <VisitSched/> } />
              <Route path="/crf" element={ <Crf/> } />
          </Routes>
          <Footer />
      </div>
    </Router>
  );

}

export default App;

const Footer = () => {
  return (
      <p className="text-center" style={ FooterStyle }>Designed & coded by Narendra Sarkar  </p>
  )
}

const FooterStyle = {
  background: "#124",
  fontSize: ".8rem",
  color: "#ffff",
  position: "absolute",
  bottom: 0,
  padding: "1rem",
  margin: 0,
  width: "100%",
  opacity: ".5"
}

