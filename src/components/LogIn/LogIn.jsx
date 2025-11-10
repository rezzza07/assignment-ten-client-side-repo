import React from 'react';
import { FcGoogle } from 'react-icons/fc'; // Google icon
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen ">
            {/* Outer wrapper for gradient border */}
            <div className="max-w-md w-full rounded-3xl p-[3px] bg-gradient-to-br from-orange-500 via-pink-500 to-purple-700">
                {/* Inner card */}
                <div className="w-full rounded-3xl bg-gray-900 shadow-2xl overflow-hidden p-8 space-y-8 backdrop-blur-sm">

                    {/* Gradient Text */}
                    <h2 className="text-center text-4xl font-extrabold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 bg-clip-text text-transparent">
                        Welcome Back
                    </h2>

                    

                    {/* Form */}
                    <form className="space-y-6">
                        {/* Email Input */}
                        <div className="relative">
                            <input
                                placeholder="john@example.com"
                                className="peer h-10 w-full border-b-2 border-gray-500 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-pink-500"
                                required
                                id="email"
                                name="email"
                                type="email"
                            />
                            <label
                                htmlFor="email"
                                className="absolute left-0 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-pink-500 peer-focus:text-sm"
                            >
                                Email address
                            </label>
                        </div>

                        {/* Password Input */}
                        <div className="relative">
                            <input
                                placeholder="Password"
                                className="peer h-10 w-full border-b-2 border-gray-500 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-pink-500"
                                required
                                id="password"
                                name="password"
                                type="password"
                            />
                            <label
                                htmlFor="password"
                                className="absolute left-0 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-pink-500 peer-focus:text-sm"
                            >
                                Password
                            </label>
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="w-full py-2 px-4 rounded-md shadow-md font-semibold text-white transition duration-200 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-700"
                        >
                            Log In
                        </button>

                        <div className=" flex items-center">
                            <hr className='flex-grow border-white' />
                            <span className="text-white mx-2 text-sm">Or continue with</span>
                            <hr className="flex-grow border-white" />
                        </div>

                        {/* Google Button */}
                        <div className="flex items-center justify-center">
                            <button
                                type="button"
                                className="flex items-center justify-center gap-3 w-full py-2 px-4 bg-white rounded-md shadow-md hover:bg-gray-100 transition duration-200"
                            >
                                <FcGoogle className="text-2xl" />
                                <span className="text-gray-700 font-medium">Google</span>
                            </button>
                        </div>
                    </form>

                    {/* Register Link */}
                    <div className="text-center text-gray-300 space-y-1">
                        <p>
                            Don’t have an account?{' '}
                            <Link to="/register" className="text-white font-semibold hover:underline">
                                Register
                            </Link>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;
