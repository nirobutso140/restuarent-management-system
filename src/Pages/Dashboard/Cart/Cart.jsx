import React, { useEffect, useState } from 'react';
import useAxiosSecure from './../../../Hooks/useAxiosSecure';
import { FaTrashAlt } from 'react-icons/fa';
const axiosSecure = useAxiosSecure();


const Cart = () => {
    const [cart, setCart] = useState([])

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    

    const handleDelete = id =>{
          axiosSecure.delete(`/cart/${id}`)
          .then(res=>{
              if(res.data.deletedCount > 0){
                swal({
                    title: "Are you sure?",
                    text: "You will not be able to recover this imaginary file!",
                    type: "warning",

                  })
              }
              
          })
    }

    console.log(cart)
    useEffect(() => {
        axiosSecure.get("/cart")
            .then((res) => setCart(res.data))
            .catch((error) => console.error(error))
    })
    return (
        <div>
            <div className='flex justify-evenly mb-8'>
                <h2 className='text-4xl'>Item: {cart.length}</h2>
                <h2 className='text-4xl'>Total Price: ${totalPrice}</h2>
                <button className='btn btn-primary'>Payment</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index)=>
                                <tr key={item._id}>
                                    <th>
                                       {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={item.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                       ${item.name}
                                    </td>
                                    <td>{item.price}</td>
                                    <th>
                                        <button onClick={()=>handleDelete(item._id)} className="btn btn-ghost btn-xs"> <FaTrashAlt className='text-red-600'/> </button>
                                    </th>
                                </tr>
                            )
                        }
                        

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Cart;