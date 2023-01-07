import { Link } from "react-router-dom"


function PokeCard({poke}) {
  const {id, name, image, types} = poke;
  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={`image-card-${name}`}/>
      <p>
        {types.map((type, index) => <span key={index}>{type.type.name}</span>)}
      </p>
      <p>
        <button>{<Link to={`/pokemon/${id}`}>+ info</Link>}</button>
      </p>
    </div>
  )
}

export default PokeCard