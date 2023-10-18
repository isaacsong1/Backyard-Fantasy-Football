import React from "react";

const TeamCard = ({team, handlePickTeam}) => {
  return (
    <div id="teamCard">
      <td><h2 id="teamId">{team.id}</h2></td>
      <td>
        <img id='teamImg' src={team.image} alt={team.id}/>
      </td>
      <td><h2 id="teamName">{team.name}</h2></td>
      <td><h2>{team.owner}</h2></td>
      <button onClick={() => handlePickTeam(team)}>View Team</button>
    </div>
    
  )
}
export default TeamCard