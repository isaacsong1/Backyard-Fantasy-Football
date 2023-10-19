import React, {useState, useEffect} from "react";
import { useOutletContext } from "react-router-dom";
import PlayerCard from "./PlayerCard";
import TeamList from "./TeamList";
const URL = "http://localhost:3000/teams"

function MyTeam() {
  const {myTeam, setMyTeam, teams, handlePickTeam, selectedTeam, handleSaveTeam, players, setPlayers, loggedInUser} = useOutletContext();
  const userTeamName = window.localStorage.getItem("team")
  
  useEffect(() => {
    if (loggedInUser && teams.length) {
      const myTeamObj = teams.find(team => team.name === loggedInUser?.team)
      myTeamObj && setMyTeam(myTeamObj.players)
    } 
  }
  )
  useEffect(() => {
    if (loggedInUser && teams.length) {
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
        {myTeam.players ? myTeam.players.map(player => <PlayerCard key={player.id} player={player} />) : null}
      </ul>
      {/* <button onClick={draftPlayers}>Add Players To Team</button> */}
      <table id="pickTeam">
        <TeamList teams={teams} handlePickTeam={handlePickTeam}/>
      </table>    
  </div>
  )
}

export default MyTeam