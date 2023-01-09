import styles from './Stat.module.scss'

function Stat({ value, name }) {
  return (
    <div className={styles.stat}>
        <div className={styles.container__grafic}><span style={{height: `${value}px`}} className={styles.grafic}>{value}</span></div>
        <p>{name}</p>
    </div>
  )
}

export default Stat