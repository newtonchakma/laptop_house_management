import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddItem = () => {
    const { register, handleSubmit } = useForm();

    const [user] = useAuthState(auth);
    if(user){
        console.log(user);
    }
    const onSubmit = data => {
        
        console.log(data)
        const url = 'http://localhost:5000/myItem';
        fetch(url, { 
            method: 'POST', 
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(data),
        })
        .then(res=>res.json())
        .then(result =>{
            console.log(result);
        })
    };
 
    return (
        <div className='w-50 mx-auto'>
       <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
       <input className='mb-2'  placeholder='photo URL' type="text"  />
      <input className='mb-2'  placeholder='Name' type="name" {...register("name" )} />
      <input className='mb-2'  value={user.email} placeholder='Email' type="email" {...register("email" )}  />
      <input className='mb-2'  placeholder='Price'  type="price"{...register("price" )}/>
      <input className='mb-2'  placeholder='quantity'  type="quantity" {...register("quantity" )}  />
      <input className='mb-2'  placeholder='Supplier Name'  type="supplier" {...register("supplier name" )}/>
      <textarea className='mb-2'  value={user.description}   placeholder='Description' type="description"  {...register("description" )}/>
      <input type="submit" value="Add Item" />
    </form>
        </div>
    );
};

export default AddItem;