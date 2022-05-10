import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Product from '../Product/Product';

const Products = () => {
    const [laptops, setLaptops] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:5000/laptop';
        console.log(url);
        fetch(url)
        .then(response => response.json())
        .then(data => setLaptops(data))
    },[])
    return (
       <>

       <div className= 'container'>
            <h1 className='text-center mt-5 mb-3 text-uppercase text-primary'>InventoryItems</h1>
            <div className="container card-group">
            <div className="row gx-3 gy-3">
            {
              
           laptops.length<6? laptops:laptops.slice(0,6).map(laptop =><Product 
                key={laptop._id} 
                laptop={laptop}
                ></Product>)
             
            }
            </div>
            </div>
            <div className="w-50 mt-3 mx-auto text-center">
               <Link to='/manageInventory'  className='btn btn-primary' >manage inventory</Link>
              
        </div>
        </div>
       
       </>
    );
};

export default Products;

 {/*     products.length< 6? products:products.slice(0,6).map(product =><Product  */}