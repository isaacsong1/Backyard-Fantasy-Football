import React from "react";
import PlayerCard from "./PlayerCard";

const LowestFeatured = ({players}) => {
  const sortedPlayer = players.sort((a, b) => a.PPR_projected - b.PPR_projected)
  const featuredPlayers = sortedPlayer.slice(0,3) 
return (
  <div id="featuredPlayers">
    <h2 id="featuredPlayerText">Lowest Projected</h2>
    <ul id='featuredPlayersList'>
      {
        featuredPlayers.map(player => <PlayerCard key={player.id} player={player}/>)
      }
    </ul>
  </div>
)
}

export default LowestFeatured