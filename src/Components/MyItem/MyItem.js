import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyItemCard from '../MyItemCard/MyItemCard';

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);
    useEffect(()=>{
        const email = user.email;
        const getItems = async()=>{
            const url =`http://localhost:5000/myItem?email=${email}`;
            console.log(url);
            const {data} =  await axios.get(url)
          setMyItems(data);
        }
        getItems();
     
       
    },[user])
    return (
        <div>
            <h2>My Items:{myItems.length}</h2>
            
          
        </div>
    );
};

export default MyItem;