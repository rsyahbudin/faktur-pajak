import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const LoginCard = () => {
   const navigate = useNavigate();
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

   const validateLogin = async (username, password) => {
      try {
         const response = await fetch("https://example.com/api/login", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
         });
         const data = await response.json();
         return data.success; // Asumsikan API mengembalikan { success: true } jika login sukses
      } catch (error) {
         console.error("Error validating login:", error);
         return false;
      }
   };

   const navigateToRegister = () => {
      navigate("/register"); // Adjust the path as necessary
   };

   const handleLogin = async () => {
      const isValid = await validateLogin(username, password);
      if (isValid) {
         navigate("/dashboard");
      } else {
         alert("Username atau password salah!");
      }
   };

   return (
      <div className="flex flex-col items-center justify-center min-h-screen">
         {/* Logo Section */}
         <div className="mb-6">
            <img src={logo} alt="Logo" className="mx-auto h-12 w-auto" />
         </div>
         {/* Login Card */}
         <div className="w-full max-w-md bg-red-900 shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 flex flex-col">
            <div className="mb-6 text-center">
               <h2 className="text-center text-3xl font-bold text-white">
                  Tax Login
               </h2>
            </div>
            {/* Login Form */}
            <div className="mb-4">
               <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="username"
               >
                  Username
               </label>
               <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
               />
            </div>
            <div className="mb-6">
               <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="password"
               >
                  Password
               </label>
               <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-dark mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
               />
            </div>
            <div className="flex items-center justify-center">
               <button
                  className="bg-white hover:bg-gray-400 text-primary font-bold rounded-full py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={handleLogin}
               >
                  Sign In
               </button>
            </div>
            <div className="text-center mt-4">
               <span className="text-white mr-1 cursor-pointer underline"  onClick={navigateToRegister}>Belum punya akun?</span>
               {/* <button
                  className="text-white underline cursor-pointer"
                  onClick={navigateToRegister}
               >
                  Daftar
               </button> */}
            </div>
         </div>
      </div>
   );
};

export default LoginCard;
