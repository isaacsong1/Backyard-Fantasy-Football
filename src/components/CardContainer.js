import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Card } from 'semantic-ui-react'
import PlayerCard from "./PlayerCard";

function CardContainer()  {
  const {players, setPlayers, teams} = useOutletContext();
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
    const draftedPlayers = teams.find(team => team.name === userTeamName).players
    const mappedPlayers = players
                        // .filter(player => player.isDrafted !== true)
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
  // const draftedPlayers = teams.find(team => team.name === userTeamName)
  // console.log('draftedPlayers:', draftedPlayers)


  return (
    <div id="playerContainer">
      <h2>Football Players</h2>
      {window.localStorage.getItem("team") ? <h3>{window.localStorage.getItem("team") }</h3> : null}
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