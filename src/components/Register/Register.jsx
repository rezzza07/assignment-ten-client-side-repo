import React, { use } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';

const Register = () => {

    const { signInWithGoogle } = use(AuthContext);
    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.log(error);
        })

    }

    return (
        <div className="flex justify-center items-center min-h-screen ">
            <div
                style={{
                    background: 'linear-gradient(135deg, #ff6a00 0%, #ee0979 50%, #7f00ff 100%)',
                    animation: 'slideInFromLeft 1s ease-out',
                }}
                className="max-w-md w-full rounded-xl shadow-2xl overflow-hidden my-10 p-8 space-y-8"
            >
                {/* Inline keyframes */}
                <style>
                    {`
            @keyframes slideInFromLeft {
              0% { transform: translateX(-100%); opacity: 0; }
              100% { transform: translateX(0); opacity: 1; }
            }
            @keyframes appear {
              0% { opacity: 0; transform: translateY(10px); }
              100% { opacity: 1; transform: translateY(0); }
            }
          `}
                </style>

                <div className='space-y-2'>
                    <h2
                        style={{ animation: 'appear 1.2s ease-out' }}
                        className="text-center text-4xl font-extrabold text-white"
                    >
                        Create Account
                    </h2>
                    <p
                        style={{ animation: 'appear 1.8s ease-out' }}
                        className="text-center text-gray-200">
                        Join Artophia and blend into the world of art
                    </p>
                </div>

                <form method="POST" action="#" className="space-y-6 ">

                    {/* Name */}
                    <div className="relative">
                        <input placeholder=""
                            className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-pink-400"
                            required
                            id="name"
                            name="name"
                            type="text" />

                        <label htmlFor="name"
                            className="absolute left-0 -top-3.5 text-gray-300 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-pink-400 peer-focus:text-sm">
                            Name</label>
                    </div>

                    {/* Email Address */}
                    <div className="relative">
                        <input placeholder="john@example.com"
                            className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent 
              placeholder-transparent focus:outline-none focus:border-pink-400"
                            required
                            id="email"
                            name="email"
                            type="email" />

                        <label
                            htmlFor="email"
                            className="absolute left-0 -top-3.5 text-gray-300 text-sm transition-all 
              peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
              peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-pink-400 peer-focus:text-sm">
                            Email address</label>
                    </div>

                    {/* Photo URL */}
                    <div className="relative">
                        <input placeholder=""
                            className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-pink-400"
                            required
                            id="photo"
                            name="photo"
                            type="" />

                        <label
                            htmlFor="photo"
                            className="absolute left-0 -top-3.5 text-gray-300 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-pink-400 peer-focus:text-sm">
                            Photo URL</label>
                    </div>



                    {/* Password */}
                    <div className="relative">
                        <input
                            placeholder="Password"
                            className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-pink-400"
                            required
                            id="password"
                            name="password"
                            type="password" />

                        <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-300 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-pink-400 peer-focus:text-sm">
                            Password
                        </label>
                    </div>



                    <button className="w-full py-2 bg-gray-900 hover:bg-opacity-90 text-white rounded-lg font-semibold shadow-lg text-[20px]  transition duration-200">
                        Create Account </button>

                    <div className=" flex items-center">
                        <hr className='flex-grow border-white' />
                        <span className="text-white mx-2 text-sm">Or continue with</span>
                        <hr className="flex-grow border-white" />
                    </div>

                    <button onClick={handleGoogleSignIn} className="w-full py-2 bg-white hover:bg-gray-100 text-gray-900 rounded-lg font-semibold text-[18px]   flex items-center justify-center gap-2 ">
                        <FcGoogle className="text-2xl" /> Google
                    </button>
                </form>

                <div className="text-center text-gray-300">
                    Already have an account?
                    < Link to="/login" className="text-white font-semibold hover:underline" href="#">
                        Log In
                    </ Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
