import './App.css';
import { ItemListContainer } from './container/ItemListContainer/index';
import { NavBar } from '../src/components/NavBar/index';
import { ItemList } from './components/ItemList/index';

function App() {
  return (
    <div>
      <NavBar/> 
      <ItemListContainer greeting={"hola"}/>
      <ItemList/>
    </div>
    
  );
}

export default App;
