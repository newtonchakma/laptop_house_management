import React from 'react';
import './ManageInventoryItem.css'

const ManageInventoryItem = ({laptop}) => {
   
    const {img, name, price, quantity,_id, description, supplier} = laptop;
    return (
        <>
        <div className="col-sm-12 col-md-6 col-lg-4 col-12 gx-5">
             <div className="card shadow-lg item">
               <img src={img} alt="" />
                <div className="card-body">
                <h6><strong>{name}</strong></h6>
                   <p className="my-0"><strong>Price: </strong> <span>$</span>{price}</p>
                   <p className="py-0 my-0"><strong>Quantity: </strong>  {quantity}</p>
                   <p className="py-0 my-0"> <strong>Supplier Name: </strong>  
                   : {supplier}</p>
                   <p className="my-0 py-0"><strong>Description: </strong> {description}</p>               
             </div>
             <div className="card-footer ">
     
          
            <button className='btn btn-primary  w-100'>Delete Item</button>

      </div>
         </div>
       </div>        
        </>
    );
};

export default ManageInventoryItem;