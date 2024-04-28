import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { info } from 'autoprefixer';
import swal from 'sweetalert';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Login = () => {
    const { loginUser } = useContext(AuthContext)
    const [loginError, setLoginError] = useState('')
    const [loginSuccess, setLoginSuccess] = useState('')
    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const pass = form.pass.value
        console.log(email, pass);
        setLoginError('')
        setLoginSuccess('')

        loginUser(email, pass)
            .then(result => {
                console.log(result.user);
                setLoginSuccess("You Logged In Successfully!!!")
                e.target.reset()
                swal("Congratulation!", "You Logged In Successfully", "success");
                navigate('/')
            })
            .catch(error => {
                setLoginError(error.message)
            })

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleLogin}>
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
                                <input type="password" name='pass' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p>Already have an account? please <Link to='/register'><button className="btn btn-link">Login</button> </Link></p>
                            {

                                loginError ? <p className="text-red-600">{loginError}</p> : <p className="text-green-600">{loginSuccess}</p>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;