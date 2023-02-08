import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { BrowserRouter, Routes, Route, NavLink, Outlet, Link } from "react-router-dom";
import { PeoplePage } from './pages/PeoplePage';
import { StarshipPage } from './pages/StarshipsPage';
import { VehiclePage } from './pages/VehiclesPage';
import { PlanetPage } from './pages/PlanetPage';
import { Layout } from './components/Layout';

function App() {
  return (
    <>

      <div className='layout'>


        <BrowserRouter>
          <Layout />
            
            <Routes>
              
              <Route path="/" element={<PlanetPage />} />
              <Route path="people" element={<PeoplePage />} />
              <Route path="starships" element={<StarshipPage />} />
              <Route path="vehicles" element={<VehiclePage />} />

            </Routes>
          
        </BrowserRouter>

        {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<PlanetPage />} />
            <Route path="people" element={<PeoplePage />} />
            <Route path="starships" element={<StarshipPage />} />
            <Route path="vehicles" element={<VehiclePage />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
      </div>
    </>
  );
}

export default App;
