import React, { useEffect, useState } from 'react';
import ManageInventoryItem from '../ManageInventoryItem/ManageInventoryItem';


const ManageInventory = () => {
    const [laptops, setLaptops] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:5000/laptop';
        fetch(url)
        .then(response => response.json())
        .then(data => setLaptops(data))
    },[])
    return (
        <div className= 'container' id='inventoryItem'>
            <h1>InventoryItems</h1>
            <div className="container card-group">
            <div className="row gx-3 gy-3">
            {
                laptops.map(laptop => <ManageInventoryItem
                key={laptop._id}
                laptop={laptop}
                ></ManageInventoryItem>)
            }
        </div>
        </div>
        </div>
    );
};

export default ManageInventory;