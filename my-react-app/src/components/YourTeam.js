import React, {useState ,useEffect} from "react";
import Card from "./Card";
import NavBar from "./NavBar";
const URL = "http://localhost:3000/players"



function YourTeam({yourTeam, removeFromRoster}) {

  

  return (
  <div >
    <NavBar />
      <h3>Your Team</h3>
      <ul id="yourTeam">
      {/* {yourTeam.map(player => <Card key={player.id} player={player} handleRoster={removeFromRoster}/>)} */}
      </ul>
  </div>
  )
}

export default YourTeam