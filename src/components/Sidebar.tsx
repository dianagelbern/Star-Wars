import { Link, NavLink, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarth, faShuttleSpace, faUsers, faTruck } from '@fortawesome/free-solid-svg-icons'

export const Sidebar = () => {
  /*
  
  */
  return (
    <>
      <nav className='sidebar'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Star_Wars_Logo..png/640px-Star_Wars_Logo..png" alt="Star Wars logo" className="nav_image" />
        <ul className="list">
          <li>

            <NavLink to="/" >
              <div className="menu_element">
                <FontAwesomeIcon icon={faEarth} color={"white"} size={"1x"} className={"button_icon"} />
                <h3>Planets</h3>
              </div>

            </NavLink>
          </li>
          <li >

            <NavLink to="/starships">
              <div className='menu_element'>
                <FontAwesomeIcon icon={faShuttleSpace} color={"white"} size={"1x"} className={"button_icon"} />
                <h3>Starships</h3>
              </div>

            </NavLink>
          </li>
          <li >

            <NavLink to="/people">
              <div className='menu_element'>
                <FontAwesomeIcon icon={faUsers} color={"white"} size={"1x"} className={"button_icon"} />
                <h3> People</h3>
              </div>
            </NavLink>
          </li>
          <li >

            <NavLink to="/vehicles">
              <div className='menu_element'>
                <FontAwesomeIcon icon={faTruck} color={"white"} size={"1x"} className={"button_icon"} />
                <h3>Vehicles</h3>
              </div>

            </NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};