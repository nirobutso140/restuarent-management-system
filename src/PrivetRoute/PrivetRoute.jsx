import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({children}) => {
   const {user, loading} = useContext(AuthContext)

   if(loading){
      return <span className="loading loading-spinner text-secondary text-center"></span>
   }
   if(user){
      return children
   }
   return <Navigate to={"/login"}/>
    
};

export default PrivetRoute;