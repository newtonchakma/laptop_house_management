import React from 'react';
import './InventoryItem.css'

const InventoryItem = (props) => {
 const {img,name,price,quantity,id,description,supplier} = props.laptop;
    return (
        <>
       
        <div className="col-sm-12 col-md-6 col-lg-4 col-12 gx-5">
             <div class="card shadow-lg product">
             <img src={img} class="card-img-top"/>
                <div className="card-body">
                  <h6>{name}</h6>
                   <p className=""><strong>Price: </strong> <span>$</span>{price}</p>
                   <p className=""><strong>Quantity: </strong>  {quantity}</p>
                   <p > <strong>Supplier Name: </strong>  
                   : {supplier}</p>
                   <p><strong>Description: </strong> {description}</p>
                 <button className="btn btn-primary w-100"><small> updated</small></button>
             </div>
             </div>
             </div>
        </>
    );
};

export default InventoryItem;