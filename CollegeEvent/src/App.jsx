import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import EventDetailsPage from './pages/EventDetailsPage';
import RegistrationForm from './pages/RegistrationForm';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details" element={<EventDetailsPage />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
