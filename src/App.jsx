import './App.css';
import { ItemListContainer } from './container/ItemListContainer/index';
import { NavBar } from '../src/components/NavBar/index';

function App() {
  return (
    <div>
      <NavBar/> 
      <ItemListContainer greeting={"hola"}/>
    </div>
    
  );
}

export default App;
