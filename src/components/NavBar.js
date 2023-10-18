import { NavLink } from "react-router-dom";
import { Icon } from 'semantic-ui-react'


function NavBar() {
  const loggedIn = window.localStorage.getItem("isLoggedIn")
    return(
     loggedIn ?
        <nav className="navbar">
        <NavLink id="link" to='/'>
          <Icon.Group size='big'>
            <Icon size='big' name='circle outline' />
          <Icon name='home' color="" />
          </Icon.Group>
        </NavLink>
        <NavLink id="link" to='/players'>
        <Icon.Group size='big' >
              <Icon size='big' color='yellow' name='circle outline' />
            <Icon name='football ball' id="football"/>
          </Icon.Group>
          Player Draft
        </NavLink>
        <NavLink id="link" to='/myteam'>
          <Icon.Group size='big'>
              <Icon size='big' color="yellow" name='circle outline' />
            <Icon name='football ball'/>
          </Icon.Group>
          My Team
        </NavLink>
        <NavLink id="link" to='/newteam'>
        <Icon.Group size='big'>
              <Icon size='big' color="yellow" name='circle outline' />
            <Icon name='football ball' />
          </Icon.Group>
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