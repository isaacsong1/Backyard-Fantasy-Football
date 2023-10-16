import React, {useState} from "react"

function Card({player, handleRoster})  {
  const [checkPPR, setCheckPPR] = useState(false)
  

  const handlePPR = () => {
    setCheckPPR(currentPPR => !currentPPR)
  }

 
  return (

    <div id='playerCard'>
        <h4 id="name">{player.name}</h4>
         <h5 id="nickname">{player.nickname} : {player.position}</h5>
        <img id='img' src={player.image}/>
       
        <>
        {checkPPR ? 
        <div>
          <p id="ppr">Projected PPR: {player.PPR_projected}</p>
          <p id="ppr">Last Weeks PPR: {player.past_PPR}</p>
        </div>
 :""}
        </>
        <button id='btn' onClick={handlePPR}>See PPR</button>
        <button id='btn' onClick={() => handleRoster(player)}>Handle Roster</button>
    </div>
    
  )
}

export default Card