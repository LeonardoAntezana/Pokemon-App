import React from 'react'

function ItemDetail({ poke }) {
  const {id, name, images, stats, abilities, types} = poke;
  return (
    <div>
      <h2>{name}</h2>
      <img src={images.front_default} alt={`image-${name}`} />
      <div>
        {types.map((type, index) => <span key={index}>{type.type.name}</span>)}
      </div>
      <div>
        {abilities.map((abi, index) => <li key={index}>{abi.ability.name}</li>)}
      </div>
        {stats.map((stat, index) => <li key={index}>{stat.stat.name}:  {stat.base_stat}</li>)}
    </div>
  )
}

export default ItemDetail