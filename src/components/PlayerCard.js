import React, {useState} from "react"
import { useOutletContext } from 'react-router-dom';
import { Button, Card, Image } from 'semantic-ui-react'

function PlayerCard({player})  {
  const [checkPPR, setCheckPPR] = useState(true)
  const {handleAddToRoster} = useOutletContext();

  const handleClick = () => {
    handleAddToRoster(player)
  }

  const handlePPR = () => {
    setCheckPPR(currentPPR => !currentPPR)
  }


  return (

    // <div id='playerCard'>
    //   <img id='img' src={player.image} alt={player.name} />
    //     <h3 id="name">{player.name}</h3>
    //     <h6 id="nickname">{player.nickname} : {player.position}</h6>
    //     <>
    //       {checkPPR ? 
    //       <div>
    //         {player.PPR_projected < player.past_PPR ? <h3>Projected PPR: {player.PPR_projected}<span id='greenArrow'>▲</span></h3>: <h3>Projected PPR: {player.PPR_projected}🔻</h3>}
            
    //       </div>
    //       :""}
    //     </>
    //     <button id='btn' onClick={handleClick}>Handle Roster</button>
    // </div>
    <Card id='playerCard'>
      <Image src={player.image} alt={player.name} />
      <Card.Content>
        <Card.Header>{player.name}</Card.Header>
        <Card.Meta>
          <span className='date'>{player.nickname} : {player.position}</span>
        </Card.Meta>
        <Card.Description>
          {checkPPR ? (player.PPR_projected < player.past_PPR ? <h3>Projected PPR: {player.PPR_projected}<span id='greenArrow'>▲</span></h3>: <h3>Projected PPR: {player.PPR_projected}🔻</h3>) :""}
          <Button id='btn' onClick={handleClick}>Handle Roster</Button>
        </Card.Description>
      </Card.Content>
    </Card>
    
  )
}

export default PlayerCard