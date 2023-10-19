import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import PlayerCard from "./PlayerCard";
import TeamList from "./TeamList";
const URL = "http://localhost:3000/teams"

function MyTeam() {
  const {myTeam, setMyTeam, teams, handlePickTeam, loggedInUser} = useOutletContext();
  const userTeamName = window.localStorage.getItem("team")

  useEffect(() => {
    if (loggedInUser.team === userTeamName && teams.length) {
      const myTeamObj = teams.find(team => team.name === loggedInUser?.team)
      myTeamObj && setMyTeam(myTeamObj.players)
    } 
  })
 

  if (Array.isArray(myTeam)) {
    myTeam.filter(player => player.isDrafted !== false);
  }

 

  return (

  <div id="yourTeam">
      <h3>{loggedInUser.team}</h3>
      <ul id="yourTeamList">
        {loggedInUser.team === userTeamName && myTeam.length? myTeam.map(player => <PlayerCard key={player.id} player={player} />) : null}
      </ul>
      <table id="pickTeam">
        <TeamList teams={teams} handlePickTeam={handlePickTeam}/>
      </table>    
  </div>
  )
}

export default MyTeam