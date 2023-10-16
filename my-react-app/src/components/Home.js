import React from "react"
import NavBar from "./NavBar";
import FeaturedPlayers from "./FeaturedPlayers";
import Header from "./Header";

const Home = ({players}) => {
  return (
    <div>
      <Header /> 
      <NavBar />
      <FeaturedPlayers players={players}/>
    </div>
    
  )
}

export default Home