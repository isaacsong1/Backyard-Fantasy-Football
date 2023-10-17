import { NavLink } from "react-router-dom";

function NavBar() {
    return(
        <nav className="navbar">
        <NavLink
          id="link"
          to='/'
          >
          Home
        </NavLink>
        <NavLink
          id="link"
          to='/players'
          >
          Player Draft
        </NavLink>
        <NavLink
          id="link"
          to='/myteam'
          >
          My Team
        </NavLink>
        <NavLink
          id="link"
          to='/newteam'
          >
          Create New Team
        </NavLink>
        <NavLink
          id="link"
          to='/signin'
          >
         Log in/Sign-up
        </NavLink>
      </nav>
    )
}

export default NavBar