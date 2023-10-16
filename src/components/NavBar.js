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
        <NavLink
          to='/signin'
          >
          Sign In
        </NavLink>
      </nav>
    )
}

export default NavBar