import React from "react";

const TeamCard = ({team, handlePickTeam}) => {
  return (
    <div id="teamCard" onClick={() => handlePickTeam(team)}>
      <td><h2 id="teamId">{team.id}</h2></td>
      <td><img 
      id='teamImg'
      src={team.image}
      /></td>
      <td><h2 id="teamName">{team.name}</h2></td>
      <td><h2>{team.owner}</h2></td>
    </div>
    
  )
}
export default TeamCard