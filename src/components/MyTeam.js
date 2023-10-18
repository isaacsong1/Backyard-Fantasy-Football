import React from "react";
import { useOutletContext } from "react-router-dom";
import PlayerCard from "./PlayerCard";

function MyTeam() {
  const {myTeam} = useOutletContext();

  const filterMyTeam = myTeam.filter(player => player.isDrafted !== false)

  return (

  <div id="yourTeam">
      <h3>Your Team</h3>
      <ul id="yourTeamList">
        {myTeam ? filterMyTeam.map(player => <PlayerCard key={player.id} player={player} />) : null}
      </ul>
  </div>
  )
}

export default MyTeam