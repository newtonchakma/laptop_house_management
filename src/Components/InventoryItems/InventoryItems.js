import React, { useEffect, useState } from 'react';
import InventoryItem from '../InventoryItem/InventoryItem';

const InventoryItems = () => {
    const [laptops, setLaptops] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:5000/laptop';
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
              

               laptops.length< 6? laptops:laptops.slice(0,6).map(laptop =><InventoryItem 
                key={laptop.id} 
                laptop={laptop}
                ></InventoryItem>)
             
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

export default InventoryItems;