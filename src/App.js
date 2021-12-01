import './App.css';
import ProductCard from "./components/productCard/ProductCard";

function App() {
  return (
    <div className="App">
      <ProductCard name="Camisa Azúl" />
      <ProductCard name="Pantalón verde" />
      <ProductCard />
      <ProductCard />
    </div>
  );
}

export default App;
