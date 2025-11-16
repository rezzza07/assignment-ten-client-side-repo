import React, { use, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthContext';
import { Link, useNavigate } from 'react-router';

const Register = () => {
  const { signInWithGoogle, setUser, updateUser, createUser } = use(AuthContext);
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const photo = form.photo.value.trim();
    const password = form.password.value;

    if (name.length < 4) {
      setNameError("Name should be more than 4 characters");
      return;
    } else setNameError("");

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must be at least 6 characters, include uppercase, lowercase, and a special character."
      );
      return;
    } else setPasswordError("");

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            toast.success("Registration successful!");
            navigate("/");
          })
          .catch((error) => {
            console.error(error);
            setUser(user);
          });
      })
      .catch((error) => alert(error.message));
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const newUser = {
          name: result.user.displayName,
          email: result.user.email,
          image: result.user.photoURL
        };

        fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(newUser)
        })
          .then(res => res.json())
          .then(data => console.log('User saved', data));

        setUser(result.user);
        navigate("/");
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div
        style={{ background: 'linear-gradient(135deg, #ff6a00 0%, #ee0979 50%, #7f00ff 100%)', animation: 'slideInFromLeft 1s ease-out' }}
        className="max-w-md w-full rounded-xl shadow-2xl overflow-hidden my-10 p-8 space-y-8"
      >
        <style>{`
          @keyframes slideInFromLeft {0% { transform: translateX(-100%); opacity: 0; }100% { transform: translateX(0); opacity: 1; }}
          @keyframes appear {0% { opacity: 0; transform: translateY(10px); }100% { opacity: 1; transform: translateY(0); }}
        `}</style>

        <div className="space-y-2">
          <h2 style={{ animation: 'appear 1.2s ease-out' }} className="text-center text-4xl font-extrabold text-white">Create Account</h2>
          <p style={{ animation: 'appear 1.8s ease-out' }} className="text-center text-gray-200">Join Artophia and blend into the world of art</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-6">
          {/* Name */}
          <div className="relative">
            <input id="name" name="name" type="text" required placeholder="Name"
              className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-pink-400" />
            <label htmlFor="name" className="absolute left-0 -top-3.5 text-gray-300 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-pink-400 peer-focus:text-sm">Name</label>
            {nameError && <p className="text-red-400 text-sm mt-1">{nameError}</p>}
          </div>

          {/* Email */}
          <div className="relative">
            <input id="email" name="email" type="email" required placeholder=""
              className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-pink-400" />
            <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-300 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-pink-400 peer-focus:text-sm">Email address</label>
          </div>

          {/* Photo URL */}
          <div className="relative">
            <input id="photo" name="photo" type="url" placeholder="Photo URL"
              className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-pink-400" />
            <label className="absolute left-0 -top-3.5 text-gray-300 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-pink-400 peer-focus:text-sm">Photo URL</label>
          </div>

          {/* Password */}
          <div className="relative">
            <input id="password" name="password" type="password" required placeholder="Password"
              className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-pink-400" />
            <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-300 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-pink-400 peer-focus:text-sm">Password</label>
            {passwordError && <p className="text-red-400 text-sm mt-1">{passwordError}</p>}
          </div>

          <button className="w-full py-2 bg-gray-900 hover:bg-opacity-90 text-white rounded-lg font-semibold shadow-lg text-[20px] transition duration-200">Create Account</button>
        </form>

        <div className="flex items-center">
          <hr className="flex-grow border-white" />
          <span className="text-white mx-2 text-sm">Or continue with</span>
          <hr className="flex-grow border-white" />
        </div>

        <button type="button" onClick={handleGoogleSignIn} className="w-full py-2 bg-white hover:bg-gray-100 text-gray-900 rounded-lg font-semibold text-[18px] flex items-center justify-center gap-2">
          <FcGoogle className="text-2xl" /> Google
        </button>

        <div className="text-center text-gray-300">
          Already have an account?{" "}
          <Link to="/login" className="text-white font-semibold hover:underline">Log In</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
