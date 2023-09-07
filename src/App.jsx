import MyNavbar from './components/MyNavbar/MyNavbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div>
      <MyNavbar/>
      <ItemListContainer greeting={'Cada mate tiene una historia por contar...'}/>
    </div>
  )
}

export default App