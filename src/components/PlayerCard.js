import React from "react"
import { useOutletContext } from 'react-router-dom';


function PlayerCard({player})  {
  const {handleAddToRoster, handleDeleteFromRoster} = useOutletContext();
  const loggedIn = window.localStorage.getItem("isLoggedIn")

  const handleClick = () => {
    player.isDrafted ? handleDeleteFromRoster(player) : handleAddToRoster(player)
  }

  return (

  
    <div id='playerCard'>
      <img id='img' src={player.image} alt={player.name} />
        <h3 id="name">{player.name}</h3>
        <h6 id="nickname">{player.nickname} : {player.position}</h6>
        <div id="PPR">
        {player.PPR_projected < player.past_PPR ? <h4>Projected PPR: {player.PPR_projected}<span id='greenArrow'>▲</span></h4>: <h4>Projected PPR: {player.PPR_projected}🔻</h4>}
        </div>
        {loggedIn ? 
       <div id="rosterBtn">
         <button id='btn' onClick={handleClick}>Handle Roster</button>
       </div>
       : null}
        
    </div>

  )
}

export default PlayerCard