import { useEffect, useState } from "react"
import { dataAxios } from "../../utilities/utilities"
import ItemList from "../ItemsList/ItemList"
import { filters } from "../../utilities/utilities"
import styles from './ItemListContainer.module.scss'

function ItemListContainer() {
  const [pokemons, setPokemons] = useState([])
  const [allPokemons, setAllPokemons] = useState([])

  const handleClickState = value => {
    if(value === 'All'){
      setPokemons([...allPokemons])
    }
    else{
      setPokemons([...allPokemons].filter(poke => poke.types[0].type.name === value))
    }
  }
  const getData = async () => {
    const data = await dataAxios('https://pokeapi.co/api/v2/pokemon/')
    const listProms = data.data.results.map(async (poke) => {
      return await dataAxios(poke.url)
    })
    const res = await Promise.all(listProms)
    setPokemons(res.map(poke => (
      {id:poke.data.id , name: poke.data.name, image: poke.data.sprites.other.home.front_default, types: [...poke.data.types]})))
    setAllPokemons(res.map(poke => (
      {id:poke.data.id , name: poke.data.name, image: poke.data.sprites.other.home.front_default, types: [...poke.data.types]})))
  }  
  useEffect(() => {
    getData()   
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        {filters.map((filt, index) => <button key={index} onClick={() => handleClickState(filt)}>{filt}</button>)}
      </div>
      {pokemons && <ItemList list={pokemons}/>}
    </div>
  )
  }

export default ItemListContainer