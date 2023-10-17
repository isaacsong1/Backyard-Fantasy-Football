import React, {useState, useEffect} from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";



const URL = "http://localhost:3000/players"

function App() {
  const [players, setPlayers] = useState([])
  const [yourTeam, setYourTeam] = useState([])


  useEffect(() => {
    fetch(URL)
    .then(res => res.json())
    .then(currPlayers => setPlayers(currPlayers.map(player => ({...player, isDrafted: false}))))
    .catch(err => alert(err))
  }, [])

  const handleAddToRoster = (playerToAdd) => {
    const playerToFind = yourTeam.find(player => player.id === playerToAdd.id)
    if (!playerToFind) {
      setPlayers(currPlayers => currPlayers.map(player => player.id === playerToAdd.id ? ({...player, isDrafted: !player.isDrafted}): player));
      setYourTeam(currYourTeam => [({...playerToAdd, isDrafted: !playerToAdd.isDrafted}), ...currYourTeam]);
    } else {
      alert('That player is already on your team.');
    }
  }

  const handleDeleteFromRoster = (playerToRemove) => {
    console.log(playerToRemove)
  }
  

  return (
    <div className="App">
      <Header /> 
      <NavBar />
      <Outlet context={{players, setPlayers, yourTeam, handleAddToRoster, handleDeleteFromRoster}} />
    </div>
  );
}

export default App;
