import React from 'react'
import PokeCard from '../PokeCard/PokeCard'

function ItemList({list}) {
  return (
    <div>
      {list.map((pokemon, index) => <PokeCard key={index} poke={pokemon}/>)}
    </div>
  )
}

export default ItemList