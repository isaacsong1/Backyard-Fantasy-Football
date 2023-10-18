import React, {useState, useEffect} from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";

import SignIn from "./SignIn";
import { useNavigate } from "react-router-dom";


const URL = "http://localhost:3000/players"
const usersURL = "http://localhost:3000/users"
const teamsURL = "http://localhost:3000/teams"


function App() {
  const [players, setPlayers] = useState([])
  const [teams, setTeams] = useState([])
  const [users, setUsers] = useState([])
  const [myTeam, setMyTeam] = useState([])
  const [pickTeam, setPickTeam] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    fetch(URL)
    .then(res => res.json())
    .then(currPlayers => setPlayers(currPlayers.map(player => ({...player, isDrafted: false}))))
    .catch(err => alert(err))
  }, []);

  useEffect(() => {
    fetch(teamsURL)
    .then(res => res.json())
    .then(setTeams)
    .catch(err => alert('error'))
  }, [])

  useEffect(() => {
    fetch(usersURL)
    .then(res => res.json())
    .then(setUsers)
    .catch(err => console.log(err))
  }, []);

  

  
  

  


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

  const handlePickTeam = (pickedTeam) => {
    setPickTeam(pickedTeam)
    navigate("/myTeam")
  
  }
 console.log(pickTeam)
  // const draftPlayers = () => {
    
  //   fetch(`${URL}/${pickTeam.id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type" : "application/json"
  //     },
  //     body: JSON.stringify({
  //       players: myTeam 
  //     })
  //   })
  //  .then(res => res.json())
  //  .then(setMyTeam(currentMyTeam => currentMyTeam = []))
  //  .catch(err => alert(''))
  // }
  

  return (
    <div className="App">
      <Header /> 
      <NavBar />
      <Outlet context={{players, setPlayers, myTeam, handleAddToRoster, handleDeleteFromRoster, teams, users, handlePickTeam, pickTeam}} />
    </div>

  );
}

export default App;
