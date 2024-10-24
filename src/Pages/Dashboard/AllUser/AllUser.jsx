import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { FaTrashAlt, FaUser, FaUsers } from 'react-icons/fa';



const AllUser = () => {
    const [user, setUser] = useState([])
    const axiosSecure = useAxiosSecure()

    useEffect(() => {
        axiosSecure.get("/users")
            .then((res) => setUser(res.data))
            .catch((error) => console.error(error))
    })

    const handleMakeAdmin = (user) =>{
          axiosSecure.patch(`/users/${user._id}`)
          .then(res =>{
            console.log(res.data);
            if(res.data.modifiedCount > 0){
                swal(`${user.name} is Admin now`);
            }
          })
    }

    const handleDelete = id => {

        axiosSecure.delete(`/users/${id}`)
        .then(res => {
             console.log(res);

             
          })
 
    }
    return (
        <div>
            <div className='flex justify-evenly mb-8'>
                <h2 className='text-4xl'>All User</h2>
                <h2 className='text-4xl'>Total User: {user.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((item, index) =>
                                <tr key={item._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>
                                        ${item.email}
                                    </td>
                                    <td>
                                    {
                                        item.role === 'admin' ? 'Admin' : <button onClick={()=> handleMakeAdmin(item)} className="btn btn-base bg-orange-400"> <FaUsers className='text-white text-2xl' /> </button>
                                    }
                                        
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(item._id)} className="btn btn-base"> <FaTrashAlt className='text-red-600 text-2xl' /> </button>
                                    </td>

                                </tr>
                            )
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default AllUser;