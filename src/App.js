
import './App.css';
import Header from './Sharepages/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import InventoryItems from './Components/InventoryItems/InventoryItems';
import Login from './Components/Login/Login';
import Registration from './Components/Login/Registration/Registration';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/inventoryItems" element={<InventoryItems></InventoryItems>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/registration" element={<Registration></Registration>}></Route>
      </Routes>
    </div>
  );
}

export default App;
