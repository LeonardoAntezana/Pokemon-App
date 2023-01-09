import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import styles from './App.module.scss'

function App() {

  return (
    <BrowserRouter>
       <div className={styles.App}>
        <Routes>
          <Route exact path='/' element={<ItemListContainer/>}/>
          <Route exact path="/pokemon/:idPokemon" element={<ItemDetailContainer/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
