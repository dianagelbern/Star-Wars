import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { BrowserRouter, Routes, Route, NavLink, Outlet, Link } from "react-router-dom";
import { PeoplePage } from './pages/PeoplePage';
import { StarShipPage } from './pages/StarshipsPage';
import { VehiclePage } from './pages/VehiclesPage';
import { PlanetPage } from './pages/PlanetPage';

function App() {
  return (
    <>
      
      <div className='layout'>
        
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<PlanetPage />} />
            <Route path="people" element={<PeoplePage />} />
            <Route path="starships" element={<StarShipPage />} />
            <Route path="vehicles" element={<VehiclePage />} />
            <Route path="*" element={<VehiclePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

const Layout = () => {
  return (
    <>
      <nav className='side_nav'>
          <ul>
            <li>
              <Link to="/">Planets</Link>
            </li>
            <li>
              <Link to="/starships">Starships</Link>
            </li>
            <li>
              <Link to="/people">People</Link>
            </li>
            <li>
              <Link to="/vehicles">Vehicles</Link>
            </li>
          </ul>
        </nav>

      <Outlet />
    </>
  )
};

export default App;
