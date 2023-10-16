import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Card from "./Card";
import NavBar from "./NavBar";


function CardContainer()  {
  const [players, setPlayers] = useOutletContext();

  const handleSort = (e) => {
    const selectedValue = e.target.value; 
    if (selectedValue === "highestPPR") {
      setPlayers(currentPlayers => [...currentPlayers].sort((a, b) => b.PPR_projected - a.PPR_projected));
    } else if (selectedValue === "lowestPPR") {
      setPlayers(currentPlayers => [...currentPlayers].sort((a, b) => a.PPR_projected - b.PPR_projected));
    }
  }

  const handleFilter = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue) {
      setPlayers(currentPlayers => currentPlayers.filter(player => player.position === selectedValue))
    } 
  }

  const mappedPlayers = players.map(player => <Card key={player.id} player={player} />)

  return (
    <div>
      {/* <NavBar /> */}
      <h3>Football Players</h3>
      <select onChange={handleFilter}>
        <option value="All">Select a Position</option>
        <option value="QB">QB</option>
        <option value="RB">RB</option>
        <option value="WR">WR</option>
        <option value="K">K</option>
      </select>
      <select onChange={handleSort}>
        <option value="highestPPR">Highest PPR</option>
        <option value="lowestPPR">Lowest PPR</option>
      </select>
        <div id="playerTable">
          {mappedPlayers}
        {/* handleRoster={addToRoster} */}
        </div>
    </div>
  )
}

export default CardContainer