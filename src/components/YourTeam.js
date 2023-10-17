import React from "react";
// import PlayerCard from "./PlayerCard";
import NavBar from "./NavBar";
import { useOutletContext } from "react-router-dom";
import PlayerCard from "./PlayerCard";

function YourTeam() {
  const {yourTeam} = useOutletContext();

  return (

  <div id="yourTeam">
    {/* <NavBar /> */}
      <h3>Your Team</h3>
      <ul id="yourTeamList">
        {yourTeam ? yourTeam.map(player => <PlayerCard key={player.id} player={player} />) : null}
      </ul>
  </div>
  )
}

export default YourTeam