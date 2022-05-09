import React from 'react';
import { useForm } from "react-hook-form";

const AddItem = () => {
    const { register, handleSubmit } = useForm();
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
       <input className='mb-2'  placeholder='photo URL' type="text" {...register("img")} />
      <input className='mb-2' placeholder='Name' {...register("name")} />
      <input className='mb-2'  placeholder='Price' {...register("price")} />
      <input className='mb-2'  placeholder='quantity' {...register("quantity")} />
      <input className='mb-2'  placeholder='Supplier Name' {...register("supplier")} />
      <textarea className='mb-2'  placeholder='Description' type="description" {...register("description")} />
      <input type="submit" value="Add Item" />
    </form>
        </div>
    );
};

export default AddItem;