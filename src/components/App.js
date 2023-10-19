import React, {useState, useEffect} from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";
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
  const [selectedTeam, setSelectedTeam] = useState("")
  const localUser = JSON.parse(localStorage.getItem('user'))
  
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
    .catch(err => alert('error'))
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
    const playerToFind = myTeam.find(player => player.id === playerToAdd.id)
    const playerPosition = myTeam.find(player => player.position === playerToAdd.position)
    const teamToFind = teams.find(team => team.name === loggedInUser.team)
    if (!playerToFind) {
      if (loggedInUser.team && teamToFind) {
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
        })
        .catch(err => alert(err))
      }}  
    } else {
      alert('That player is already on your team.');
    }

  };

  const handleDeleteFromRoster = (playerToRemove) => {
    const teamToFind = teams.find(team => team.name === loggedInUser.team)
    setMyTeam(currMyTeam => currMyTeam.filter(player => player.id !== playerToRemove.id))
    const myRoster = [...myTeam]
    fetch(`${teamsURL}/${teamToFind.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        players: myRoster.filter(player => player.id !== playerToRemove.id)
      })
    })
    .then(res => res.json())
    .then((data) => {
      setMyTeam(data.players)
      setTeams(currTeams => currTeams.map(team => team.name === teamToFind.name ? ({...team, players: data.players}) : team))
      setPlayers(currPlayers => currPlayers.map(player => player.id === playerToRemove.id ? ({...player, isDrafted: !player.isDrafted}): player))
    })
   
  };


 

  
  const handleSubmit = (newTeam) => {
    window.localStorage.setItem("team", newTeam.name)
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
    .then(() => fetch(`${usersURL}/${localUser.foundUser.id}` , {
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
      alert("Password does not match")
  } else if(foundUser && foundUser.password === password) {
      window.localStorage.setItem("isLoggedIn", true);
      window.localStorage.setItem("user", foundUser.name)
      setLoggedInUser(foundUser)
      setName("")
      setPassword("")
      navigate("/newTeam")
  } else {
      alert('User not found');
  }
};
//? -------------------------------------
  return (
    <div className="App">
      <Header /> 
      <NavBar />
      <Outlet context={{players, setPlayers, myTeam, setMyTeam, handleAddToRoster, handleDeleteFromRoster, teams, handlePickTeam, users, setUsers, loggedInUser, setLoggedInUser, selectedTeam, setSelectedTeam, handleSubmit, findUser, password, name, setName, setPassword}} />

    </div>
  );

}

export default App;
