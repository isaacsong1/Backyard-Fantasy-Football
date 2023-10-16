import React, {useState} from "react"
import { Card, Image } from 'semantic-ui-react'

function PlayerCard({player})  {
  const [checkPPR, setCheckPPR] = useState(false)
  

  const handlePPR = () => {
    setCheckPPR(currentPPR => !currentPPR)
  }

  const mappedStats = []
  for (let key in player.attribute) {
    mappedStats.push(`${key}: ${player.attribute[key]}`)
  }

  return (

    // <div id='playerCard'>
    //     <h4 id="name">{player.name}</h4>
    //     <h5 id="nickname">{player.nickname} : {player.position}</h5>
    //     <img id='img' src={player.image} alt={player.name} />
    
    //     <>
    //       {checkPPR ? 
    //       <div>
    //         <p id="ppr">Projected PPR: {player.PPR_projected}</p>
    //         <p id="ppr">Last Weeks PPR: {player.past_PPR}</p>
    //       </div> 
    //       :""}
    //     </>
    //     <button id='btn' onClick={handlePPR}>See PPR</button>
    //     <button id='btn' onClick={() => handleRoster(player)}>Handle Roster</button>
    // </div>
    <Card>
      <Image src={player.image} alt={player.name} />
      <Card.Content>
        <Card.Header>{player.name}</Card.Header>
        <Card.Meta>
          <span className='date'>{player.nickname}</span>
        </Card.Meta>
        <Card.Description>
          {mappedStats}
        </Card.Description>
      </Card.Content>
    </Card>
    
  )
}

export default PlayerCard