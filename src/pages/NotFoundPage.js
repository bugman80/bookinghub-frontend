import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Pagina non trovata!</h1>
      <p className="text-lg text-gray-600 mb-8">
        Sembra che la pagina che stai cercando non esista.
      </p>
      <Link 
        to="/" 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Torna alla Home
      </Link>
    </div>
  );
}

export default NotFoundPage;