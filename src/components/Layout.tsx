import { Link, NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
  /*
  
  */
    return (
      <>
        <nav className='side_nav'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Star_Wars_Logo..png/640px-Star_Wars_Logo..png" alt="Star Wars logo" className="nav_image" />
        <ul>
              <li>
                <NavLink className='menu_element'  to="/">Planets</NavLink>
              </li>
              <li>
                <NavLink className='menu_element'  to="/starships">Starships</NavLink>
              </li>
              <li>
                <NavLink className='menu_element'  to="/people">People</NavLink>
              </li>
              <li>
                <NavLink className='menu_element'  to="/vehicles">Vehicles</NavLink>
              </li>
            </ul>
          </nav>
  
        <Outlet />
      </>
    )
  };