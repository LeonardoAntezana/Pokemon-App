import { Link } from "react-router-dom"
import styles from './PokeCard.module.scss'

function PokeCard({poke}) {
  const {id, name, image, types} = poke;
  return (
    <div className={styles.poke__card}>
      <h2>{name}</h2>
      <img src={image} alt={`image-card-${name}`}/>
      <p className={styles.types}>
        {types.map((type, index) => <span key={index}>{type.type.name}</span>)}
      </p>
      <p className={styles.container__buttonInfo}>
        {<Link to={`/pokemon/${id}`}><button className={styles.more__info}>+ info</button></Link>}
      </p>
    </div>
  )
}

export default PokeCard