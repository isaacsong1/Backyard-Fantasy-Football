import React from "react";
// import PlayerCard from "./PlayerCard";
import NavBar from "./NavBar";

function YourTeam({yourTeam, removeFromRoster}) {
  return (
  <div >
      <h3>Your Team</h3>
      <ul id="yourTeam">
      {/* {yourTeam.map(player => <PlayerCard key={player.id} player={player} handleRoster={removeFromRoster}/>)} */}
      </ul>
  </div>
  )
}

export default YourTeam