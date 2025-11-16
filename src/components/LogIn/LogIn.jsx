import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import { toast } from 'react-toastify';

const Login = () => {
  const [error, setError] = useState("");
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError(""); 
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then(() => {
        navigate(location.state || "/");
      })
      .catch((error) => {
        console.error("Login error:", error);
        let errorMessage = "Login failed. Please check your credentials.";
        
        if (error.code === "auth/wrong-password") {
          errorMessage = "Incorrect password. Please try again.";
        } else if (error.code === "auth/user-not-found") {
          errorMessage = "No account found with this email.";
        }
        
        setError(errorMessage);
        toast.error(errorMessage);
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        const errorMessage = "Google login failed. Please try again.";
        setError(errorMessage);
        toast.error(errorMessage);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-md w-full rounded-3xl p-[3px] bg-gradient-to-br from-orange-500 via-pink-500 to-purple-700">
        <div className="w-full rounded-3xl bg-gray-900 shadow-2xl overflow-hidden p-8 space-y-8 backdrop-blur-sm">
          <h2 className="text-center text-4xl font-extrabold bg-linear-to-r from-orange-500 via-pink-500 to-purple-700 bg-clip-text text-transparent">
            Welcome Back
          </h2>

          {error && <p className="text-red-500 text-center">{error}</p>}

          <form onSubmit={handleLogin} className="space-y-6">
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

            <button
              type="submit"
              className="w-full py-2 px-4 rounded-md shadow-md font-semibold text-white transition duration-200 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-700"
            >
              Log In
            </button>
          </form>

          <div className="flex items-center">
            <hr className="flex-grow border-white" />
            <span className="text-white mx-2 text-sm">Or continue with</span>
            <hr className="flex-grow border-white" />
          </div>

          <div className="flex items-center justify-center">
            <button
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-3 w-full py-2 px-4 bg-white rounded-md shadow-md hover:bg-gray-100 transition duration-200"
            >
              <FcGoogle className="text-2xl" />
              <span className="text-gray-700 font-medium">Google</span>
            </button>
          </div>

          <div className="text-center text-gray-300 space-y-1">
            <p>
              Don’t have an account?{" "}
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
