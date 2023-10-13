import React, {useState, useEffect} from "react"
import Card from "./Card"
const URL = "http://localhost:3000/players"

function CardContainer()  {
  const [players, setPlayers] = useState([])

  useEffect(() => {
    fetch(URL)
    .then(res => res.json())
    .then(setPlayers)
    .catch(err => alert('error'))
  }, [])
  return (
    <div>
      <h1>Football Players</h1>
     { players.map(player => <Card key={player.id} {...player}/>)}
    </div>
  )
}

export default CardContainer