// Form.js
import axios from "axios";
import React, { useState } from "react";

const SingUp = () => {
  const [errors, setErrors] = useState({});
  const [registerError, setRegisterErrors] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
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

    // Validate first name
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
      isValid = false;
    }

    // Validate last name
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
      isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Valid email is required";
      isValid = false;
    }

    // Validate phone number
    const phoneRegex = /^\d{11}$/;
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone)) {
      newErrors.phone = "Valid phone number is required";
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
        const response = await axios.post(
          "https://gtrs.vercel.app/api/v1/user/create-user",
          formData,
          {
            headers: {
              authorization: `${localStorage.getItem("accessToken")}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (response) {
          setRegisterErrors(response?.data?.message);
        } else {
          setRegisterErrors("");
        }
      } catch (error) {
        if (error) {
          setRegisterErrors(
            "User create fail! Email & phone number must be unique."
          );
        } else {
          setRegisterErrors("");
        }
      } finally {
        setLoading(false);
      }

      // console.log("Form submitted:", formData);
    } else {
      console.log("Form has errors. Please fix them.");
    }
  };

  return (
    <>
      <div className="max-w-md mx-auto flex justify-center items-center min-h-screen">
        <form onSubmit={handleSubmit} className="space-y-4 px-3">
          <h1 className="text-center font-semibold text-xl  text-gray-600">
            Add a new user
          </h1>
          {registerError && (
            <h4 className="text-center p-2 bg-gray-300 my-2">
              {registerError}
            </h4>
          )}
          <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-x-4">
            <div className="">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className={`p-2 border w-full border-gray-200 outline-0 rounded-sm focus:border-gray-300 transition-all duration-300  ${
                  errors.firstName ? "border-red-500" : ""
                }`}
              />
              <small className="text-red-500">{errors.firstName}</small>
            </div>
            <div className="mt-3 md:mt-0">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className={`p-2 border w-full border-gray-200 outline-0 rounded-sm focus:border-gray-300 transition-all duration-300  ${
                  errors.lastName ? "border-red-500" : ""
                }`}
              />
              <small className="text-red-500">{errors.lastName}</small>
            </div>
          </div>
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
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className={`p-2 border w-full border-gray-200 outline-0 rounded-sm focus:border-gray-300 transition-all duration-300   ${
              errors.phone ? "border-red-500" : ""
            }`}
          />
          <small className="text-red-500">{errors.phone}</small>
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
            className={`w-full p-2 text-white rounded  bg-blue-500 hover:bg-blue-600`}
          >
            {loading ? "Processing..." : " Add new user"}
          </button>
        </form>
      </div>
    </>
  );
};

export default SingUp;
