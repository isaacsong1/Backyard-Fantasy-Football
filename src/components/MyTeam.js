import React, {useState, useEffect} from "react";
import { useOutletContext } from "react-router-dom";
import PlayerCard from "./PlayerCard";
import TeamList from "./TeamList";
const URL = "http://localhost:3000/teams"

function MyTeam() {
  const {teams} = useOutletContext();
  let {myTeam} = useOutletContext();
  // const {draftPlayers} = useOutletContext();
  const {handlePickTeam} = useOutletContext();
  const {pickTeam} = useOutletContext();
  const [myTeamPlayers, setMyTeamPlayers] = useState([])
  const filterMyTeam = myTeam.filter(player => player.isDrafted !== false)

  // const handlePickTeam = (pickedTeam) => {
  //   setPickTeam(pickedTeam)
  //  const teamPlayers = pickTeam.players
  //  console.log(teamPlayers)
  //  {
  //   teamPlayers.forEach(player => <PlayerCard key={player.id} player={player} />)
  //  }
    
  // }

// console.log(pickTeam)

  const draftPlayers = () => {
    fetch(`${URL}/${pickTeam.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        players: myTeam 
      })
    })
   .then(res => res.json())
   .then(myTeam = false)
   .catch(err => alert(''))
  }


  return (

  <div id="yourTeam">

      <h3>{pickTeam.name}</h3>



      <ul id="yourTeamList">
        {myTeam ? filterMyTeam.map(player => <PlayerCard key={player.id} player={player} />) : null}
      </ul>
      <button onClick={draftPlayers}>Add Players To Team</button>
      <table id="pickTeam">
        <TeamList teams={teams} handlePickTeam={handlePickTeam}/>
      </table>    
  </div>
  )
}

export default MyTeam