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
  const localUser = JSON.parse(localStorage.getItem('user'))
 const localUserId = localUser?.foundUser?.id || ''
  const localUserName = localUser?.foundUser?.name || ''
  const localUserTeam = localUser?.foundUser?.team || ''

  console.log(localUserId, localUserName, localUserTeam) 
  

  const navigate = useNavigate()


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

  useEffect(() => {
    if (!loggedInUser.id && localUser?.foundUser) {
      setLoggedInUser(localUser.foundUser)
    }
  },
  [
    loggedInUser
  ]
  )

//! ------------------------------------
  
//! HELPER FUNCTIONS -------------------
  const handleAddToRoster = (playerToAdd) => {
    const playerToFind = players.find(player => player.id === playerToAdd.id)
    const playerPosition = myTeam.players.find(player => player.position === playerToAdd.position)
    const teamToFind = teams.find(team => team.name === loggedInUser.team)
    if (playerToFind) {
      if (loggedInUser.team) {
      if (!playerPosition) {
      const teamCopy = {...teamToFind, players: [...teamToFind.players, {...playerToFind, isDrafted: true}]}
      debugger
        fetch(`${teamsURL}/${teamToFind.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(teamCopy)
        })
        .then(resp => resp.json())
        .then((updatedTeam) => {
          setPlayers(currPlayers => currPlayers.map(player => player.id === playerToAdd.id ? ({...player, isDrafted: !player.isDrafted}): player));
          setMyTeam(updatedTeam)
        })
        .catch(err => alert(err))
      }}  
    } else {
      alert('That player is already on your team.');
    }

  };

  const handleDeleteFromRoster = (playerToRemove) => {
    const teamToFind = teams.find(team => team.name === loggedInUser.team)
    const updateTeam = {...myTeam, players: myTeam.player.filter(player => player.id !== playerToRemove.id)}
      setMyTeam(updateTeam)
    const myRoster = [...myTeam]
    fetch(`${teamsURL}/${teamToFind.id}`, {
      method: "PATCH",
      headers: {
       "Content-Type" : "application/json"
      },
      body: JSON.stringify(updateTeam)
    })
    .then(res => res.json())
   
  };


 
//  console.log(localUser.foundUser.id)
  
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
    .then(() => fetch(`${usersURL}/${localUser.foundUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        team: newTeam.name
      })
    })
    .then(res => {
      if (res.ok) {
        return (res.json())
      } else {
        throw(res.statusText)
      }
      
    })
    .then((currentUser) => {
      setLoggedInUser(currentUser)
      window.localStorage.setItem("user", JSON.stringify({foundUser: currentUser}))
    })
    )
   
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
    if (foundTeam) {
      setPlayers(currPlayers => currPlayers.map(player => {
        const playerName = player.name
        if (foundTeam.players.find(draftedPlayer => draftedPlayer.name === playerName)) {
          return {...player, isDrafted: !player.isDrafted}
        } else {
          return {...player}
        }
      }))
      setMyTeam(foundTeam)
    }
  }

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
      <Outlet context={{players, setPlayers, myTeam, setMyTeam, handleAddToRoster, handleDeleteFromRoster, teams, handlePickTeam, pickTeam, users, setUsers, loggedInUser, setLoggedInUser, selectedTeam, setSelectedTeam, handleSubmit, findUser, password, name, setName, setPassword}} />

    </div>
  );

}

export default App;
