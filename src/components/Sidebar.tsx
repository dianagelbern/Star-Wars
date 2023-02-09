import { Link, NavLink, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarth, faShuttleSpace, faUsers, faTruck } from '@fortawesome/free-solid-svg-icons'

export const Sidebar = () => {
  /*
  
  */
  return (
    <>
      <nav className='sidebar'>
        <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Star_Wars_Logo..png/640px-Star_Wars_Logo..png" alt="Star Wars logo" className="nav_image" />
        <ul>
          <li className="button_nav">
        
            <NavLink to="/" className="menu_element">
              <FontAwesomeIcon icon={faEarth} color={"white"} size={"1x"} className={"button_icon"} />
              Planets
            </NavLink>
          </li>
          <li className="button_nav">

            <NavLink className='menu_element' to="/starships">
              <FontAwesomeIcon icon={faShuttleSpace} color={"white"} size={"1x"} className={"button_icon"} />
              Starships
            </NavLink>
          </li>
          <li className="button_nav">

            <NavLink className='menu_element' to="/people">
              <FontAwesomeIcon icon={faUsers} color={"white"} size={"1x"} className={"button_icon"} />
              People
            </NavLink>
          </li>
          <li className="button_nav">

            <NavLink className='menu_element' to="/vehicles">
              <FontAwesomeIcon icon={faTruck} color={"white"} size={"1x"} className={"button_icon"} />
              Vehicles
            </NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};