import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyItemCard = ({item}) => {
    const {img, name, price, quantity, description, supplier} = item;
   
       return (
           <> 
           <div className="col-sm-12 col-md-6 col-lg-4 col-12 gx-5">
                <div className="card shadow-lg">
                  <img src={img} alt="" />
                   <div className="card-body">
                   <h6><strong>{name}</strong></h6>
                      <p className="my-0"><strong>Price: </strong> <span>$</span>{price}</p>
                      <p className="py-0 my-0"><strong>Quantity: </strong>  {quantity}</p>
                      <p className="py-0 my-0"> <strong>Supplier Name: </strong>  
                      : {supplier}</p>
                      <p className="my-0 py-0"><strong>Description: </strong> {description}</p>
                    
                </div>
                </div>
                </div> */
               
           </>
       );
};

export default MyItemCard;