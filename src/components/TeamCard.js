import React from "react";

const TeamCard = ({team}) => {
  return (
    <div id="teamCard">
      <h2 id="teamId">{team.id}</h2>
      <img 
      id='teamImg'
      src={team.image}
      />
      <h2 id="teamName">{team.name}</h2>
      <h2>{team.owner}</h2>
    </div>
  )
}
export default TeamCard