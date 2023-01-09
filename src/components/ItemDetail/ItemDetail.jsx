import Stat from '../Stat/Stat';
import styles from './ItemDetail.module.scss'

function ItemDetail({ poke }) {
  console.log(poke)
  const {id, name, images, stats, abilities, types} = poke;
  return (
    <div className={styles.detail}>
      <div className={styles.detail__left}>
        <h2>{name}</h2>
        <img src={images.front_default} alt={`image-${name}`} />
      </div>
      <div className={styles.detail__right}>
        <div className={styles.container_props}>
          <h4>Tipo:</h4>
          {types.map((type, index) => <span key={index}>{type.type.name}</span>)}
        </div>
        <div className={styles.container_props}>
          <h4>Hablidades:</h4>
          {abilities.map((abi, index) => <li key={index}>{abi.ability.name}</li>)}
        </div>
          <div className={styles.container_props}>
            <h4>Stats:</h4>
            <div className={styles.container__stats}>
              {stats.map((stat, index) => <Stat key={index} name={stat.stat.name} value={stat.base_stat}/>)}
            </div>
          </div>     
      </div>
    </div>
  )
}

export default ItemDetail