import React from "react";
import { useOutletContext } from 'react-router-dom'

const TeamCard = ({team, handlePickTeam}) => {
  const {loggedInUser} = useOutletContext();

  return (
    <div id="teamCard">
      <td><h2 id="teamId">{team.id}</h2></td>
      <td>
        <img id='teamImg' src={team.image} alt={team.id}/>
      </td>
      <td><h2 id="teamName">{team.name}</h2></td>
      <td><h2>{team.owner}</h2></td>
      {/* {(team.owner === loggedInUser.name ? <button onClick={() => handlePickTeam(team)}>View Team</button> : null)} */}
    </div>
    
  )
}
export default TeamCard