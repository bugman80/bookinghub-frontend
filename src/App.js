import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import Hotels from './pages/Hotels';
import Bookings from './pages/Bookings';
import Services from './pages/Services';
import Users from './pages/Users';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar sarà inclusa in tutte le pagine */}
        <Navbar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/" element={<Home />} />
            <Route path="/hotels" element={<PrivateRoute element={Hotels} />} />
            <Route path="/services" element={<PrivateRoute element={Services} />} />
            <Route path="/bookings" element={<PrivateRoute element={Bookings} />} />
            <Route path="/users" element={<PrivateRoute element={Users} />} />
            <Route path="*" element={<NotFoundPage />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
