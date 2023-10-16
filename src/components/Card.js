import React, {useState} from "react"

function Card({player, handleRoster})  {
  const [checkPPR, setCheckPPR] = useState(true)
  

  // const handlePPR = () => {
  //   setCheckPPR(currentPPR => !currentPPR)
  // }


  return (

    <div id='playerCard'>
        <h4 id="name">{player.name}</h4>
        <h5 id="nickname">{player.nickname} : {player.position}</h5>
        <img id='img' src={player.image} alt={player.name} />
    
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
    
  )
}

export default Card