import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'

function ItemDetailContainer() {
  const {idPokemon} = useParams()
  const [pokemon, setPokemon] = useState(null)
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`).then(res => setPokemon(res.data))
  }, [idPokemon])
  return (
    <div>
      <button><Link to='/'>Atras</Link></button>
      {pokemon && <ItemDetail poke={pokemon}/>}
    </div>
  )
}

export default ItemDetailContainer