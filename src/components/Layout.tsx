import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
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