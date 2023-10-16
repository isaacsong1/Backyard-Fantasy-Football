import { NavLink } from "react-router-dom";

function NavBar() {
    return(
        <nav className="navbar">
        <NavLink id='navLink'
          to='/'
          >
          Home
        </NavLink>
        <NavLink id='navLink'
          to='/players'
          >
          Players
        </NavLink>
        <NavLink id='navLink'
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