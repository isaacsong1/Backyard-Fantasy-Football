import React from "react"
import Logo from "../Logo.png"
import { Button, Menu } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'
import SignIn from './SignIn'


function Header()  {
  const navigate = useNavigate()
  const loggedIn = window.localStorage.getItem("isLoggedIn")

  const handleSignIn = () => {
    navigate("/signin")
  };

  const handleRegister = () => {
    navigate("/register")
  }
  
  const handleSignOut = async () => {
      window.localStorage.removeItem("isLoggedIn")
      window.localStorage.removeItem("user")
      window.localStorage.removeItem("team")
      navigate("/") 
  };
  
  


  return (
    <div id="logo">
      <img className="logo" src={Logo} alt="Backyard Football" />

      {!loggedIn ? <Menu>
                    <Menu.Item>
                      <Button onClick={handleSignIn}>Log In</Button>
                    </Menu.Item>
                    <Menu.Item>
                      <Button color="yellow" onClick={handleRegister}>Sign up</Button>
                    </Menu.Item> 
                  </Menu>
                    :
                    <Menu>
                      <Menu.Item>
                          <Button onClick={handleSignOut}>Log Out</Button>
                      </Menu.Item>
                    </Menu> }
    </div>
   
   
  )
}

export default Header
