import Products from './componentes/Products';
import './App.css';
import Navbar2 from './componentes/Navbar2';
import Inventario from './componentes/Inventario';

function App() {
  return (
    <div className="App">
      <Navbar2/>
      <Inventario/>
      <Products/> 
    </div>
  );
}

export default App;
