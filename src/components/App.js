import React, {useState, useEffect} from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";



const URL = "http://localhost:3000/players"

function App() {
  const [players, setPlayers] = useState([])
  const [myTeam, setMyTeam] = useState([])


  useEffect(() => {
    fetch(URL)
    .then(res => res.json())
    .then(currPlayers => setPlayers(currPlayers.map(player => ({...player, isDrafted: false}))))
    .catch(err => alert(err))
  }, [])

  const handleAddToRoster = (playerToAdd) => {
    const playerToFind = myTeam.find(player => player.id === playerToAdd.id)
    if (!playerToFind) {
      setPlayers(currPlayers => currPlayers.map(player => player.id === playerToAdd.id ? ({...player, isDrafted: !player.isDrafted}): player));
      setMyTeam(currYourTeam => [({...playerToAdd, isDrafted: !playerToAdd.isDrafted}), ...currYourTeam]);
    } else {
      alert('That player is already on your team.');
    }
  }

  const handleDeleteFromRoster = (playerToRemove) => {
    setPlayers(currPlayers => ([...currPlayers, ({...playerToRemove, isDrafted: !playerToRemove.isDrafted})]));
    setMyTeam(currMyTeam => currMyTeam.map(player => player.id === playerToRemove.id ? ({...player, isDrafted: !player.isDrafted}) : player));
  }
  

  return (
    <div className="App">
      <Header /> 
      <NavBar />
      <Outlet context={{players, setPlayers, myTeam, handleAddToRoster, handleDeleteFromRoster}} />
    </div>
  );
}

export default App;
