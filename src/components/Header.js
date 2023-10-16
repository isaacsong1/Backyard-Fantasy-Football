import React from "react"
import Logo from "../Logo.png"


function Header()  {
  return (
    <div>
      <img className="logo" src={Logo} alt="Backyard Football" />
      {/* <img src="https://upload.wikimedia.org/wikipedia/en/2/28/Backyard_Football_Logo.png"/> */}
      {/* <input id="search" type="text" placeholder="Search.."></input> */}
    </div>
   
   
  )
}

export default Header