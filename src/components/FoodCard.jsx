import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAxiosSecure from './../Hooks/useAxiosSecure';

const FoodCard = ({ item }) => {
    const { name, recipe, image, price, _id} = item
    const {user} = useAuth()
    const Navigate = useNavigate()
    const axiosSecure = useAxiosSecure();
   

    const handleFoodItem = (food) =>{
        if(user && user.email){
            const cartItem = {
                menuId : _id,
                email : user.email,
                name,
                price,
                image
            }
            axiosSecure.post("/cart", cartItem)
            .then(res =>{
                console.log(res.data);  
                if(res.data.insertedId){
                    swal("Good job!", "You added an item");
                }
            })

        }else{
            swal({
                title: "Please login",
                text: "I will close in 2 seconds.",
                timer: 3000
              });
              Navigate('/login')
        }
    }
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <div className='cardImage relative'>
                <figure><img src={image} alt="Shoes" /></figure>
                <span className='absolute bottom-4 bg-base-100  font-semibold right-6 bg-black text-white p-2 bg-opacity-30'>${price}</span>
            </div>
            <div className="card-body text-left">
                <h2 className="card-title">{name}</h2>
                <p className='text-gray-500'>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={()=> handleFoodItem(item)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;