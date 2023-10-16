import React from "react"
import Card from "./Card"
import NavBar from "./NavBar"


function CardContainer({players, addToRoster, handleSort, handleFilter})  {
 
  return (
    <div>
      <NavBar />
      <h3>Football Players</h3>
      <select onChange={handleFilter}>
        <option value="QB">QB</option>
        <option value="RB">RB</option>
        <option value="WR">WR</option>
        <option value="K">K</option>
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