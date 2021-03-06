
import './App.css';
import Header from './Sharepages/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Registration from './Components/Login/Registration/Registration';
import Products from './Components/Products/Products';
import Inventory from './Components/Inventory/Inventory';
import NotFound from './Sharepages/NotFound/NotFound';
import RequireAuth from './Components/Login/RequireAuth/RequireAuth';
import ManageInventory from './Components/ManageInventory/ManageInventory';
import ManageInventoryItem from './Components/ManageInventoryItem/ManageInventoryItem';
import AddItem from './Components/AddItem/AddItem';
import MyItem from './Components/MyItem/MyItem';
import Blogs from './Components/Blogs/Blogs';
import MyItemCard from './Components/MyItemCard/MyItemCard';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/product/:productId" element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path="/inventory" element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/registration" element={<Registration></Registration>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route path="/manageInventory" element={<ManageInventory></ManageInventory>}></Route>
        <Route path="/manageInventoryItem" element={<ManageInventoryItem></ManageInventoryItem>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}>Blogs</Route>
     <Route path="/addItem" element={<AddItem></AddItem>}></Route>
     <Route path="/myItem" element={
       <RequireAuth>
         <MyItem></MyItem>
       </RequireAuth>
     }></Route>
     <Route path="/myItemCard" element={
       <RequireAuth>
         <MyItemCard></MyItemCard>
       </RequireAuth>
     }></Route>
     
      </Routes>
    </div>
  );
}

export default App;
