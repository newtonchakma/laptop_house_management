
import './App.css';
import Header from './Sharepages/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import InventoryItems from './Components/InventoryItems/InventoryItems';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/inventoryItems" element={<InventoryItems></InventoryItems>}></Route>
      </Routes>
    </div>
  );
}

export default App;
