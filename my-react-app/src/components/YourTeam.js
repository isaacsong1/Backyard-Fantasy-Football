import React from "react";
import Card from "./Card";

function YourTeam({yourTeam, removeFromRoster}) {
  return (
  <div >
      <h3>Your Team</h3>
      <ul id="yourTeam">
      {yourTeam.map(player => <Card key={player.id} player={player} handleRoster={removeFromRoster}/>)}
      </ul>
  </div>
  )
}

export default YourTeam