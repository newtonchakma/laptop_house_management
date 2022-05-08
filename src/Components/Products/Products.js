import React, { useEffect, useState } from 'react';
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

       <div className= 'container' id='inventoryItem'>
            <h1>InventoryItems</h1>
            <div className="container card-group">
            <div className="row gx-3 gy-3">
            {
              
               laptops.map(laptop =><Product 
                key={laptop._id} 
                laptop={laptop}
                ></Product>)
             
            }
            </div>
            </div>
            <div className="w-50 mt-3 mx-auto text-center">
               <button className='btn btn-primary' >manage inventory</button>
         </div>
        </div>
       
       </>
    );
};

export default Products;

 {/*     products.length< 6? products:products.slice(0,6).map(product =><Product  */}