import { NavLink } from "react-router-dom";

function NavBar() {
    return(
        <nav className="navbar">
        <NavLink
          to='/'
          >
          Home
        </NavLink>
        <NavLink
          to='/players'
          >
          Players
        </NavLink>
        <NavLink
          to='/myteam'
          >
          My Team
        </NavLink>
      </nav>
    )
}

export default NavBar