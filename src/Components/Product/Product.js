import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'

const Product = (props) => {
 const {img,name,price,quantity,_id,description,supplier} = props.laptop;
 const navigate = useNavigate();

 const updateToProduct = id =>{
    navigate(`/product/${id}`)
 }
    return (
        <>
       
        <div id='product' className="col-sm-12 col-md-6 col-lg-4 col-12 gx-5">
             <div class="card shadow-lg product">
             <img src={img} class="card-img-top"/>
                <div className="card-body">
                <h6><strong>{name}</strong></h6>
                   <p className="my-0"><strong>Price: </strong> <span>$</span>{price}</p>
                   <p className="py-0 my-0"><strong>Quantity: </strong>  {quantity}</p>
                   <p className="py-0 my-0"> <strong>Supplier Name: </strong>  
                   : {supplier}</p>
                   <p className="my-0 py-0"><strong>Description: </strong> {description}</p>
                 <button onClick={()=> updateToProduct(_id)} className="btn btn-primary w-100"><small> updated</small></button>
             </div>
             </div>
             </div>
            
        </>
    );
};

export default Product;