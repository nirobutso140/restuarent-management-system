import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const Register = () => {

const {createUser} = useContext(AuthContext)
 const [registerError, setRegisterError] = useState('')
 const [success, setSuccess] = useState('')
 const navigate = useNavigate()

    const hadleRegister = (e) =>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        setRegisterError('')
        setSuccess('')

        const uppercaseRegex = /[A-Z]/;
        const specialCharacterRegex = /[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/;
        if(!uppercaseRegex.test(password) && !specialCharacterRegex.test(password)){
          setRegisterError('Error!!! You have to give any uppercase character and special character')
          return ;
        }

        createUser(email,password)
        .then(result =>{
            console.log(result.user);
            setSuccess('Congratulation!!! Your Account Created Successfully')
            e.target.reset()
            swal("Congratulation", "your account created successfully", "success");
            navigate('/')
        })
        .catch(error =>{
            console.error(error)
            setRegisterError(error.message)
        })
    } 

    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={hadleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p>Already have an account? please <Link to='/login'><button className="btn btn-link">Login</button> </Link></p>
                            {
                               registerError? <p className='text-red-700'>{registerError}</p> : <p className='text-green-800'>{success}</p>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;