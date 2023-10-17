import { NavLink } from "react-router-dom";

function NavBar() {
    return(
        <nav className="navbar">
        <NavLink to='/'><button>Home</button></NavLink>
        <NavLink to='/players'><button>Players</button></NavLink>
        <NavLink to='/myteam'><button>My Team</button></NavLink>
        <NavLink to='/signin'><button>Sign In</button></NavLink>
      </nav>
    )
}

export default NavBar