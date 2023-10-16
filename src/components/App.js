import React, {useState, useEffect} from "react";

import Header from "./Header";
import CardContainer from "./CardContainer";
import YourTeam from "./YourTeam";
import NavBar from "./NavBar";
import FeaturedPlayers from "./FeaturedPlayers";
import { Outlet, useOutletContext } from "react-router-dom";

const URL = "http://localhost:3000/players"

function App() {
  const [players, setPlayers] = useState([])
  const [yourTeam, setYourTeam] = useState([])
  const [filteredPlayers, setFilteredPlayers] = useState([])
 


  useEffect(() => {
    fetch(URL)
    .then(res => res.json())
    .then(setPlayers)

    .catch(err => alert('error'))
  }, [])

  const addToRoster = (playerAdded) => {
    setPlayers(currentPlayers => currentPlayers.filter(player => player.id !== playerAdded.id)) 
      setYourTeam(currentYourTeam => [playerAdded, ...currentYourTeam])
  } 

  const removeFromRoster = (playerRemove) => {
   setYourTeam(currentYourTeam => currentYourTeam.filter(player => player.id !== playerRemove.id))
   setPlayers(currentPlayers => [playerRemove, ...currentPlayers])
  }

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
    const filteredPlayers = players.filter(player => player.position === selectedValue)
     if (selectedValue) {
      return (
        setPlayers(filteredPlayers)
      )
    }
  }

  return (
    <div className="App">
     <Header /> 
     <NavBar />
     <FeaturedPlayers players={players}/>
     <Outlet context={[players, setPlayers]} />
     {/* <YourTeam player={players} removeFromRoster={removeFromRoster}/> */}
     {/* <CardContainer players={players} filteredPlayers={filteredPlayers} addToRoster={addToRoster} handleSort={handleSort} handleFilter={handleFilter}/> */}
     </div>
     
)

  // const addToRoster = (playerAdded) => {
  //   setPlayers(currentPlayers => currentPlayers.filter(player => player.id !== playerAdded.id)) 
  //     setYourTeam(currentYourTeam => [playerAdded, ...currentYourTeam])
  // } 

  // const removeFromRoster = (playerRemove) => {
  //   setYourTeam(currentYourTeam => currentYourTeam.filter(player => player.id !== playerRemove.id))
  //   setPlayers(currentPlayers => [playerRemove, ...currentPlayers])
  // }

  

 
}

export default App;
