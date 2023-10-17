import React, {useState} from "react"
import { Card, Image } from 'semantic-ui-react'

function PlayerCard({player, handleRoster})  {
  const [checkPPR, setCheckPPR] = useState(true)
  

  const handlePPR = () => {
    setCheckPPR(currentPPR => !currentPPR)
  }

  const mappedStats = []
  for (let key in player.attribute) {
    mappedStats.push(`${key}: ${player.attribute[key]}`)
  }

  return (

    <div id='playerCard'>
      <img id='img' src={player.image} alt={player.name} />
        <h3 id="name">{player.name}</h3>
        <h6 id="nickname">{player.nickname} : {player.position}</h6>
        <>
          {checkPPR ? 
          <div>
            {player.PPR_projected < player.past_PPR ? <h3>Projected PPR: {player.PPR_projected}<span id='greenArrow'>▲</span></h3>: <h3>Projected PPR: {player.PPR_projected}🔻</h3>}
            
          </div>
          :""}
        </>
        {/* <button id='btn' onClick={handlePPR}>See PPR</button> */}
        <button id='btn' onClick={() => handleRoster(player)}>Handle Roster</button>
    </div>
    // <Card>
    //   <Image src={player.image} alt={player.name} />
    //   <Card.Content>
    //     <Card.Header>{player.name}</Card.Header>
    //     <Card.Meta>
    //       <span className='date'>{player.nickname}</span>
    //     </Card.Meta>
    //     <Card.Description>
    //       {mappedStats}
    //     </Card.Description>
    //   </Card.Content>
    // </Card>
    
  )
}

export default PlayerCard