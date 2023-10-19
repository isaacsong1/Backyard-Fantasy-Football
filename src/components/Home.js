import React, {useState, useEffect} from 'react'
import FeaturedPlayers from './FeaturedPlayers'
import Header from "./Header";
import NavBar from "./NavBar";
import LowestFeatured from './LowestFeatured';
import SignIn from './SignIn';
const URL = "http://localhost:3000/players"


const Home = () => {
    const [players, setPlayers] = useState([])
   
    useEffect(() => {
        fetch(URL)
        .then(res => res.json())
        .then(setPlayers)
        .catch(err => alert(err))
      }, [])

    return (
        <div>
            <FeaturedPlayers players={players}/>
            <LowestFeatured players={players}/>
        </div>
    )
}

export default Home