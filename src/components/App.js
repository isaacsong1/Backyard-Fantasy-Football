import React, {useState, useEffect} from "react";
import Home from "./Home"
import { Outlet } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";
import { CookiesProvider, useCookies } from "react-cookie";
import SignIn from "./SignIn";



const URL = "http://localhost:3000/players"

function App() {
  const [cookies, setCookie] = useCookies(["user"]);

  const [players, setPlayers] = useState([])
  const [yourTeam, setYourTeam] = useState([])
  
  function handleLogin(user) {
    setCookie("user", user, { path: "/" });
  }

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

  

  return (
    <CookiesProvider>
      <div className="App">
        <Header /> 
        <NavBar />
        <Outlet context={[players, setPlayers]} />
        {/* {cookies.user ? (
          <Home context={[players, setPlayers]} user={cookies.user} />
          ) : ( 
          <SignIn onLogin={handleLogin}/> */}
          {/* )} */}
      </div>
    </ CookiesProvider>
  );
}

export default App;
