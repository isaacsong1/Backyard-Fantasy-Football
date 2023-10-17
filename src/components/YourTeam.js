import React from "react";
// import PlayerCard from "./PlayerCard";
import NavBar from "./NavBar";
import { useOutletContext } from "react-router-dom";

function YourTeam({}) {
  const [players, setPlayers] = useOutletContext();

  return (

  <div id="yourTeam">
    {/* <NavBar /> */}
      <h3>Your Team</h3>
      <ul id="yourTeamList">
      {/* {players.map(player => <PlayerCard key={player.id} player={player}/>)} */}
      </ul>
  </div>
  )
}

export default YourTeam