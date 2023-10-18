import { NavLink } from "react-router-dom";


function NavBar() {
  const loggedIn = window.localStorage.getItem("isLoggedIn")
    return(
     loggedIn ?
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
        {/* <NavLink
          id="link"
          to='/'
          >
          Log in/Sign-up
        </NavLink> */}
      </nav>
      : null
    )
}

export default NavBar