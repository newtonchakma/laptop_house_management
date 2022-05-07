import React from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const {productId} = useParams();
    return (
        <div>
            <h1>inventory : {productId}</h1>
        </div>
    );
};

export default Inventory;