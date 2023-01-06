import React from 'react'

function ItemDetail({ poke }) {
  const {name, sprites, abilities, types} = poke;
  return (
    <div>
      <h2>{name}</h2>
      <img src={sprites.other['official-artwork'].front_default} alt={`image-${name}`} />
      <div>
        {types.map((type, index) => <span key={index}>{type.type.name}</span>)}
      </div>
      <div>
        {abilities.map((abi, index) => <li key={index}>{abi.ability.name}</li>)}
      </div>
    </div>
  )
}

export default ItemDetail