import React, {useState, useEffect} from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";

import SignIn from "./SignIn";
import { useNavigate } from "react-router-dom";

//? GLOBAL VARIABLES--------------------------
const URL = "http://localhost:3000/players"
const usersURL = "http://localhost:3000/users"
const teamsURL = "http://localhost:3000/teams"
//? ------------------------------------------

function App() {
  const [players, setPlayers] = useState([])
  const [teams, setTeams] = useState([])
  const [users, setUsers] = useState([])
  const [loggedInUser, setLoggedInUser] = useState({})
  const [myTeam, setMyTeam] = useState([])
  const [name, setName] = useState("");
  const [password, setPassword] = useState("")
  const [pickTeam, setPickTeam] = useState({})
  const [selectedTeam, setSelectedTeam] = useState("")

  const navigate = useNavigate()

  console.log(loggedInUser.name)

//! FETCH CALLS (Players, Teams, Users)--
// Players
  useEffect(() => {
    fetch(URL)
    .then(res => res.json())
    .then(currPlayers => setPlayers(currPlayers.map(player => ({...player, isDrafted: false}))))
    .catch(err => alert(err))
  }, []);
// Teams
  useEffect(() => {
    fetch(teamsURL)
    .then(res => res.json())
    .then(setTeams)
    .catch(err => alert('error'))
  }, []);
// Users
  useEffect(() => {
    fetch(usersURL)
    .then(res => res.json())
    .then(usersArray => setUsers(usersArray))
    .catch(err => console.log(err))
  }, []);

//! ------------------------------------
  
//! HELPER FUNCTIONS -------------------
  const handleAddToRoster = (playerToAdd) => {
    const playerToFind = myTeam.find(player => player.id === playerToAdd.id)
    const teamToFind = teams.find(team => team.name === selectedTeam)
    const playerPosition = myTeam.find(player => player.position === playerToAdd.position)
    if (!playerToFind) {
      if (!!selectedTeam) {
        if (!playerPosition) {
        teamToFind.players.push({...playerToAdd, isDrafted: !playerToAdd.isDrafted})
        fetch(`${teamsURL}/${teamToFind.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(teamToFind)
        })
        .then(resp => resp.json())
        .then(() => {
          setPlayers(currPlayers => currPlayers.map(player => player.id === playerToAdd.id ? ({...player, isDrafted: !player.isDrafted}): player));
          // setMyTeam(currYourTeam => [({...playerToAdd, isDrafted: !playerToAdd.isDrafted}), ...currYourTeam]);
        })
        .catch(err => alert(err))
      }}  
    } else {
      alert('That player is already on your team.');
    }

  };

  const handleDeleteFromRoster = (playerToRemove) => {
    setPlayers(currPlayers => ([...currPlayers, ({...playerToRemove, isDrafted: !playerToRemove.isDrafted})]));
    setMyTeam(currMyTeam => currMyTeam.map(player => player.id === playerToRemove.id ? ({...player, isDrafted: !player.isDrafted}) : player));
    console.log(myTeam)
    // debugger
    fetch(`${teamsURL}/3`, {
      method: "PATCH",
      headers: {
       "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        players: myTeam.filter(player => player.id !== playerToRemove.id)
      })
    })
    .then(res => res.json())
    .then(setMyTeam)
  };


 
 

  const handleSubmit = (newTeam) => {

   if (loggedInUser.teams !== true) {
    fetch(teamsURL, {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(newTeam)
    })
    .then(res => {
      if (res.ok) {
        return (res.json())
      } else {
        throw(res.statusText)
      }
    })
    .then(data => {
      setTeams(currentTeams => [...currentTeams, data]);
    })
    .then(() => fetch(`${usersURL}/${loggedInUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        teams: newTeam
      })
    })
    .then(res => {
      if (res.ok) {
        return (res.json())
      } else {
        throw(res.statusText)
      }
      
    })
    .then((currentUser) => setLoggedInUser(currentUser))
    )
   
    // .then(setNewTeam())
    .catch(err => alert('err'))
    
  } else {
    alert("You can only have one team!")
  }
   } 


  const handlePickTeam = (pickedTeamName) => {
    // setPickTeam(pickedTeam)
    // navigate("/myTeam")
    setSelectedTeam(pickedTeamName)
    const foundTeam = teams.find(obj => obj.name === pickedTeamName)
    console.log(foundTeam)
    if (foundTeam) {
      setPlayers(currPlayers => currPlayers.map(player => {
        const playerName = player.name
        if (foundTeam.players.find(draftedPlayer => draftedPlayer.name === playerName)) {
          return {...player, isDrafted: !player.isDrafted}
        } else {
          return player
        }
      }))
      setMyTeam(foundTeam.players)
    }
  }

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
  // };
//? WESLEY'S CODE -----------------------
const findUser = (e) => {
  e.preventDefault();

  const foundUser = users.find((user) => user.name === name.trim());
  
  if (foundUser && foundUser.password !== password) {
      console.log("Password does not match")
  } else if(foundUser && foundUser.password === password) {
      window.localStorage.setItem("isLoggedIn", true);
      window.localStorage.setItem("user", foundUser.name)
      setLoggedInUser(foundUser)
      setName("")
      setPassword("")
      navigate("/newTeam")
  } else {
      console.log('User not found');
  }
};
//? -------------------------------------
  return (
    <div className="App">
      <Header /> 
      <NavBar />



      <Outlet context={{players, setPlayers, myTeam, handleAddToRoster, handleDeleteFromRoster, teams, handlePickTeam, pickTeam, users, loggedInUser, setLoggedInUser, selectedTeam, setSelectedTeam, handleSubmit, findUser, password, name, setName, setPassword}} />

    </div>
  );

}

export default App;
