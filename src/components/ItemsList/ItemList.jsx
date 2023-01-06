import React from 'react'
import { Link } from 'react-router-dom'

function ItemList({list}) {
  return (
    <div>
      {list.map((elem, index) => <Link to={`/pokemon/${elem.id}`} key={index}><button>{elem.name}</button></Link>)}
    </div>
  )
}

export default ItemList