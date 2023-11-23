// Form.js
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Valid email is required";
      isValid = false;
    }

    // Validate password
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post(
          "http://localhost:7000/api/v1/auth/login",
          formData,
          {
            headers: {
              authorization: `${localStorage.getItem("accessToken")}`,
              "Content-Type": "application/json",
            },
          }
        );

        const accessToken = response.data.data.accessToken;
        localStorage.setItem("accessToken", accessToken);
        navigate("/");
        console.log(response?.data);
      } catch (error) {
        console.error("Error submitting form:", error);
      }

      console.log("Form submitted:", formData);
    } else {
      console.log("Form has errors. Please fix them.");
    }
  };

  return (
    <>
      <div className="max-w-md mx-auto flex justify-center items-center min-h-screen">
        <form onSubmit={handleSubmit} className="space-y-4 px-3">
          <h1 className="text-center font-semibold text-xl uppercase text-gray-600">
            GTRS admin dashboard
          </h1>

          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={`p-2 border w-full border-gray-200 outline-0 rounded-sm focus:border-gray-300 transition-all duration-300   ${
              errors.email ? "border-red-500" : ""
            }`}
          />
          <small className="text-red-500">{errors.email}</small>

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className={`p-2 border w-full border-gray-200 outline-0 rounded-sm focus:border-gray-300 transition-all duration-300   ${
              errors.password ? "border-red-500" : ""
            }`}
          />
          <small className="text-red-500">{errors.password}</small>

          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Login
          </button>

          <p className="text-center mt-3">
            I have no account?
            <Link className="ml-2" to="/authenticate-layout/register">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
