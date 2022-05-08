import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const {productId} = useParams();
    const [product, setProduct] = useState({});
    useEffect (() => {
        const url = `http://localhost:5000/laptop/${productId}`;
        console.log(url);
        fetch(url)
        .then(response => response.json())
        .then(data =>setProduct(data))
    }, [])
    return (
        <div className='mt-4 '>
            <h1>inventory : {product.name}</h1>

            <div className="card mb-3 w-75 mx-auto shadow" >
  <div className="row g-0 ">
    <div className="col-md-4">
      <img src={product.img} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
      <p className="py-0 my-0"><strong>Quantity: </strong>  {product.name}</p>
      <p className="my-0"><strong>Price: </strong> <span>$</span>{product.price}</p>
                   <p className="py-0 my-0"><strong>Quantity: </strong>  {product.quantity}</p>
                   <p className="py-0 my-0"> <strong>Supplier Name: </strong>  
                   : {product.supplier}</p>
                   <p className="my-0 py-0"><strong>Description: </strong> {product.description}</p>
      
        <p className="card-text mt-1"><small>
            <button className='me-1'>Delivered</button>
            <input className='w-25'  type="text" /> <button>Restock</button>
        </small></p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Inventory;