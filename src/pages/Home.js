import React from 'react';
import { getUserData } from '../api'
import backgroundImage from '../assets/images/hotel_background.jpg';

const Home = () => {

  const data = getUserData();
  
  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="text-center text-white bg-black bg-opacity-80 p-8 rounded-lg">
        <h1 className="text-3xl font-bold">Benvenuto, {data?.firstname} {data?.lastname} su Prenotiamo</h1>
        <p className="mt-4 text-gray-300">Scegli l'hotel perfetto per il tuo soggiorno tra le numerose offerte del nostro catalogo</p>
        <p className="mt-4 text-gray-300">e goditi una esperienza indimenticabile nelle migliori location del mondo</p>
        <p className="mt-4 text-gray-300">cosa aspetti? Prenotiamo!</p>
      </div>
    </div>
  );
};

export default Home;
