import React from "react"

function Card({name, nickname})  {
  return (
    <div>
      <h3>{name}</h3>
      <p>{nickname}</p>
    </div>
  )
}

export default Card