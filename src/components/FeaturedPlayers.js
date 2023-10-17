import React from "react"
import PlayerCard from "./PlayerCard"
import {useOutletContext} from "react-router-dom"

const FeaturedPlayers = ({players}) => {
  const sortedPlayer = players.sort((a, b) => b.PPR_projected - a.PPR_projected)
  const featuredPlayers = sortedPlayer.slice(0,3) 
return (
  <div id="featuredPlayers">
    <h2 id="featuredPlayerText">Featured Players</h2>
    <ul id='featuredPlayersList'>
      {
        featuredPlayers.map(player => <PlayerCard key={player.id} player={player}/>)
      }
    </ul>
  </div>
)
}

export default FeaturedPlayers