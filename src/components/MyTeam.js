import React, {useState, useEffect} from "react";
import { useOutletContext } from "react-router-dom";
import PlayerCard from "./PlayerCard";
import TeamList from "./TeamList";
const URL = "http://localhost:3000/teams"

function MyTeam() {
  const {myTeam, setMyTeam, teams, handlePickTeam, selectedTeam, handleSaveTeam} = useOutletContext();
  const userTeamName = window.localStorage.getItem("team")

  if (teams.length) {
    const myTeamObj = teams.find(team => team.name === userTeamName)
    if (myTeamObj.players.length) {
      setMyTeam(myTeamObj.players)
    }
  }
  
  const filterMyTeam = myTeam.filter(player => player.isDrafted !== false)

  return (

  <div id="yourTeam">
      <h3>{window.localStorage.getItem("team")}</h3>
      <ul id="yourTeamList">
        {myTeam.length ? filterMyTeam.map(player => <PlayerCard key={player.id} player={player} />) : null}
      </ul>
      {/* <button onClick={draftPlayers}>Add Players To Team</button> */}
      <table id="pickTeam">
        <TeamList teams={teams} handlePickTeam={handlePickTeam}/>
      </table>    
  </div>
  )
}

export default MyTeam