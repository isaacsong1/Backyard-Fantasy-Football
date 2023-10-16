import React, {useState, useEffect} from "react";
import Header from "./Header";
import CardContainer from "./CardContainer";
import YourTeam from "./YourTeam";
import NavBar from "./NavBar";
const URL = "http://localhost:3000/players"

function App() {
  const [players, setPlayers] = useState([])
  const [yourTeam, setYourTeam] = useState([])
 

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
    if (selectedValue) {
      setPlayers(currentPlayers => currentPlayers.filter(player => player.position === selectedValue))
    } 
  }

  return (
    <div className="App">
     <Header /> 
     <NavBar />
     <YourTeam yourTeam={yourTeam} removeFromRoster={removeFromRoster}/>
     <CardContainer players={players} addToRoster={addToRoster} handleSort={handleSort} handleFilter={handleFilter}/>
     
    </div>
  );
}

export default App;
