// Form.js
import axios from "axios";
import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/authProvider/AuthProvider";

const Login = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [loginErrors, setLoginErrors] = useState("");
  const [loading, setLoading] = useState(false);

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
        setLoading(true);

        // Make a request to the login endpoint
        const response = await axios.post(
          "https://gtrs.vercel.app/api/v1/auth/login",
          formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        // Check if the response contains the accessToken
        const accessToken = response.data.data.accessToken;

        // Set the accessToken in localStorage
        localStorage.setItem("accessToken", accessToken);

        window.location.reload();
        window.location.href = "/";

        // Navigate after setting the accessToken
        navigate(from);
      } catch (error) {
        console.error("Login failed:", error);
        setLoginErrors("Login failed!");
      } finally {
        setLoading(false);
      }
    } else {
      console.log("Form has errors. Please fix them.");
    }
  };

  const handleClick = () => {
    if (isAuthenticated) {
      // alert("You are already authenticated!");
    }
  };

  return (
    <>
      <div className="max-w-md mx-auto flex justify-center items-center min-h-screen">
        <form onSubmit={handleSubmit} className="space-y-4 px-3">
          <h1 className="text-center font-semibold text-xl uppercase text-gray-600">
            GTRS admin dashboard
          </h1>
          {loginErrors && (
            <h4 className="text-center bg-red-100 text-red-600 p-2 w-full rounded-md">
              {loginErrors}
            </h4>
          )}

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
            onClick={handleClick}
            disabled={isAuthenticated}
            type="submit"
            className={`w-full p-2 text-white rounded  ${
              isAuthenticated
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {isAuthenticated
              ? "Already Authenticated"
              : loading
              ? "loading..."
              : "Log in"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
