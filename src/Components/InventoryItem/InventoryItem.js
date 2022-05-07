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
                <h6><strong>{name}</strong></h6>
                   <p className="my-0"><strong>Price: </strong> <span>$</span>{price}</p>
                   <p className="py-0 my-0"><strong>Quantity: </strong>  {quantity}</p>
                   <p className="py-0 my-0"> <strong>Supplier Name: </strong>  
                   : {supplier}</p>
                   <p className="my-0 py-0"><strong>Description: </strong> {description}</p>
                 <button className="btn btn-primary w-100"><small> updated</small></button>
             </div>
             </div>
             </div>
            
        </>
    );
};

export default InventoryItem;