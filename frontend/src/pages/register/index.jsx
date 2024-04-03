import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const RegisterCard = () => {
 const navigate = useNavigate();
 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");
 const [email, setEmail] = useState(""); // Assuming email is required for registration

 const registerUser = async (username, password, email) => {
    try {
      const response = await fetch('https://example.com/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, email }),
      });
      const data = await response.json();
      return data.success; // Assuming API returns { success: true } on successful registration
    } catch (error) {
      console.error("Error registering user:", error);
      return false;
    }
 };

 const handleRegistration = async () => {
    const isRegistered = await registerUser(username, password, email);
    if (isRegistered) {
      alert("Registration successful! Please log in.");
      navigate("/admin"); // Navigate to the login page after successful registration
    } else {
      alert("Registration failed. Please try again.");
    }
 };

 const navigateToLogin = () => {
    navigate("/admin"); // Adjust the path as necessary
 };

 return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Logo Section */}
      <div className="mb-6">
        <img src={logo} alt="Logo" className="mx-auto h-12 w-auto" />
      </div>
      {/* Registration Card */}
      <div className="w-full max-w-md bg-red-900 shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 flex flex-col">
        <div className="mb-6 text-center">
          <h2 className="text-center text-3xl font-bold text-white">
            Register
          </h2>
        </div>
        {/* Registration Form */}
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
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            onClick={handleRegistration}
          >
            Register
          </button>
        </div>
        <div className="text-center mt-4">
               <span className="text-white mr-1 cursor-pointer underline"  onClick={navigateToLogin}>Sudah punya akun</span>
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

export default RegisterCard;
