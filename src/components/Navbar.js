import React from 'react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import client from '../axios';
import { getUserData } from '../api';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const isAuthenticated = !!localStorage.getItem('access');

    let is_superuser = null;

    const navigate = useNavigate();

    // Funzione per resettare la sessione utente
    const restart_session = () => {
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
      navigate('/login');
    }

    try {
      is_superuser = getUserData().superuser;
    } catch (err) {
      console.error('Token error:', err);
      restart_session();
    }

    // Funzione per eseguire il logout dell'utente
    const handleLogout = async () => {
      const access = localStorage.getItem('access');
      const refresh = localStorage.getItem('refresh');
      if (access && refresh) {
        try {
          await client.post('/api/logout/', {"refresh": refresh});
          restart_session();
        } catch (err) {
          console.error('Logout error:', err);
          restart_session();
        }
      }
    };

    return (
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">
            <Link to="/">Prenotiamo</Link>
          </div>
          {/* Hamburger Menu */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          {/* Links */}
          <div
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } md:flex md:space-x-6 md:items-center`}
          >
            <Link
              to="/"
              className={`${
                location.pathname === '/' ? 'text-blue-600' : 'text-gray-700'
              } hover:text-blue-600 block md:inline`}
            >
              Home
            </Link>
            {isAuthenticated && is_superuser && (
              <Link
                to="/users"
                className={`${
                  location.pathname === '/users' ? 'text-blue-600' : 'text-gray-700'
                } hover:text-blue-600 block md:inline`}
              >
                Utenti
              </Link>
            )}
            {isAuthenticated && (
              <Link
                to="/hotels"
                className={`${
                  location.pathname === '/hotels' ? 'text-blue-600' : 'text-gray-700'
                } hover:text-blue-600 block md:inline`}
              >
                Hotels
              </Link>
            )}
            {isAuthenticated && is_superuser && (
              <Link
                to="/services"
                className={`${
                  location.pathname === '/services' ? 'text-blue-600' : 'text-gray-700'
                } hover:text-blue-600 block md:inline`}
              >
                Servizi
              </Link>
            )}
            {isAuthenticated && (
              <Link
                to="/bookings"
                className={`${
                  location.pathname === '/bookings' ? 'text-blue-600' : 'text-gray-700'
                } hover:text-blue-600 block md:inline`}
              >
                Prenotazioni
              </Link>
            )}
            {isAuthenticated ? (
              <Link
                to="#"
                onClick={handleLogout}
                className={`${
                  location.pathname === '/logout' ? 'text-blue-600' : 'text-gray-700'
                } hover:text-blue-600 block md:inline`}
              >
                Esci
              </Link>
            ) : (
              <Link
                to="/login"
                className={`${
                  location.pathname === '/login' ? 'text-blue-600' : 'text-gray-700'
                } hover:text-blue-600 block md:inline`}
              >
                Entra
              </Link>
            )}
          </div>
        </div>
      </nav>
    );
};

export default Navbar;
