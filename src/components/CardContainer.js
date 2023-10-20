import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Card } from 'semantic-ui-react'
import PlayerCard from "./PlayerCard";

function CardContainer()  {
  const {players, setPlayers, teams, loggedInUser} = useOutletContext();
  const [filterBy, setFilterBy] = useState("All");
  const userTeamName = window.localStorage.getItem("team")

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
  
  const mapPlayers = () => {
    const draftedPlayers = teams.find(team => team.name === loggedInUser.team)?.players || []
    const mappedPlayers = players
                        .filter(player => {
                          if (!draftedPlayers.find(drafted => drafted.name === player.name)) {
                            return player
                          } else {
                            return null
                          }
                        })

                        .filter(player => filterBy === "All" || player.position === filterBy)
                        .map(player => <PlayerCard key={player.id} player={player} />)
    return mappedPlayers
  }

  return (
    <div id="playerContainer">
      <h1 id="pageHeader">Football Players</h1>
      {<h2 id="pageHeader">{loggedInUser.team}</h2> || <h2 id="pageHeader">Go Create A Team!</h2>}
      <select onChange={handleFilter} value={filterBy} >
        <option value="All">All Players</option>
        <option value="QB">QB</option>
        <option value="RB">RB</option>
        <option value="WR">WR</option>
        <option value="K">K</option>
        <option value="DEF">DEF</option>
      </select>
      <select onChange={handleSort}>
        <option value="highestPPR">Highest PPR</option>
        <option value="lowestPPR">Lowest PPR</option>
      </select>
        <Card.Group id='playerTable' itemsPerRow={6}>
          {teams.length ? mapPlayers() : null}
        </Card.Group>
    </div>
  )
}

export default CardContainer