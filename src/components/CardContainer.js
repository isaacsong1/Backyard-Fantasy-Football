import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Card } from 'semantic-ui-react'
import PlayerCard from "./PlayerCard";
import NavBar from "./NavBar";



function CardContainer()  {
  const {players, setPlayers} = useOutletContext();
  const [filterBy, setFilterBy] = useState("All");

  const handleSort = (e) => {
    const selectedValue = e.target.value; 
    if (selectedValue === "highestPPR") {
      setPlayers(currentPlayers => [...currentPlayers].sort((a, b) => b.PPR_projected - a.PPR_projected));
    } else if (selectedValue === "lowestPPR") {
      setPlayers(currentPlayers => [...currentPlayers].sort((a, b) => a.PPR_projected - b.PPR_projected));
    }
  }

  const handleFilter = (e) => {
    setFilterBy(e.target.value);
  }

  const mappedPlayers = players
                        .filter(player => filterBy === "All" || player.position.toUpperCase() === filterBy.toUpperCase())
                        .map(player => <PlayerCard key={player.id} player={player} />)


  return (
    <div id="playerContainer">
      {/* <NavBar /> */}
      <h3>Football Players</h3>
      <select onChange={handleFilter} value={filterBy} >
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
        {/* <div id="playerTable">
          {mappedPlayers}
        </div> */}
        <Card.Group id='playerTable' itemsPerRow={6}>
          {mappedPlayers}
        </Card.Group>
    </div>
  )
}

export default CardContainer