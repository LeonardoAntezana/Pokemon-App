import React from 'react'
import PokeCard from '../PokeCard/PokeCard'
import styles from '../ItemListContainer/ItemListContainer.module.scss'

function ItemList({list}) {
  return (
    <div className={styles.container_pokemons}>
      {list.map((pokemon, index) => <PokeCard key={index} poke={pokemon}/>)}
    </div>
  )
}

export default ItemList