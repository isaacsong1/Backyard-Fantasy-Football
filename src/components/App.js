import React, {useState, useEffect} from "react";
import Home from "./Home"
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
    .then(setPlayers)
    .catch(err => alert(err))
  }, [])

  // const addToRoster = (playerAdded) => {
  //   setPlayers(currentPlayers => currentPlayers.filter(player => player.id !== playerAdded.id)) 
  //     setYourTeam(currentYourTeam => [playerAdded, ...currentYourTeam])
  // } 

  // const removeFromRoster = (playerRemove) => {
  //   setYourTeam(currentYourTeam => currentYourTeam.filter(player => player.id !== playerRemove.id))
  //   setPlayers(currentPlayers => [playerRemove, ...currentPlayers])
  // }

  const handleAddToRoster = (playerToAdd) => {
    const playerToFind = yourTeam.find(player => player.id === playerToAdd.id)
    if (!playerToFind) {
      setYourTeam(currYourTeam => [playerToAdd, ...currYourTeam]);
      setPlayers(currPlayers => currPlayers.filter(player => player.id !== playerToAdd.id));
    } else {
      alert('That player is already on your team.');
    }
  }

  const handleDeleteFromRoster = (playerToRemove) => {
    setYourTeam(currYourTeam => currYourTeam.filter(player => player.id !== playerToRemove.id));
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
