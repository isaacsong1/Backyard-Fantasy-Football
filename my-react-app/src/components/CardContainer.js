import React from "react"
import Card from "./Card"


function CardContainer({players, addToRoster, handleSort})  {
 
  return (
    <div>
      <h3>Football Players</h3>
      <select>
        <option>QB</option>
        <option>RB</option>
        <option>WR</option>
        <option>K</option>
      </select>
      <select onChange={handleSort}>
        <option value="highestPPR">Highest PPR</option>
        <option value="lowestPPR">Lowest PPR</option>
      </select>
      <ul id="playerTable">
     { players.map(player => <Card key={player.id} player={player} handleRoster={addToRoster}/>)}
     </ul>
    </div>
  )
}

export default CardContainer