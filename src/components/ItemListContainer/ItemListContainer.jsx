import { useEffect, useState } from "react"
import { dataAxios } from "../../utilities/utilities"
import ItemList from "../ItemsList/ItemList"

function ItemListContainer() {
  const [pokemons, setPokemons] = useState([])
  const getData = async () => {
    const data = await dataAxios('https://pokeapi.co/api/v2/pokemon/')
    const listProms = data.data.results.map(async (poke) => {
      return await dataAxios(poke.url)
    })
    const res = await Promise.all(listProms)
    setPokemons(res.map(poke => (
      {id:poke.data.id , name: poke.data.name, image: poke.data.sprites['other']['official-artwork'].front_default,
      types: [...poke.data.types], abilities: [...poke.data.abilities]})))
  }  
  useEffect(() => {
    getData()   
  }, [])

  return (
    <div>
      {pokemons && <ItemList list={pokemons}/>}
    </div>
  )
  }

export default ItemListContainer