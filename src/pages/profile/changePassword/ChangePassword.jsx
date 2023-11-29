import axios from "axios";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../components/authProvider/AuthProvider";

const ChangePassword = () => {
  const { users } = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const [passErrors, setPassErrors] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    password: "",
    newPassword: "",
    confirmPassword: "",
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
    if (!formData.password.trim()) {
      newErrors.password = "password is required";
      isValid = false;
    }

    // Validate password
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
      isValid = false;
    }

    if (!formData.newPassword.trim()) {
      newErrors.newPassword = "New password is required";
      isValid = false;
    }

    if (formData.newPassword.length < 6) {
      newErrors.newPassword = "New password must be at least 6 characters long";
      isValid = false;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = "Password does not match!";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatePassword = {
      password: formData.password,
      newPassword: formData.newPassword,
    };

    if (validateForm()) {
      const url = `https://gtrs.vercel.app/api/v1/user/password-change/${users?.data?._id}`;

      try {
        setLoading(true);
        const response = await axios.patch(url, updatePassword, {
          headers: {
            authorization: `${localStorage.getItem("accessToken")}`,
            "Content-Type": "application/json",
          },
        });

        // console.log(response);
        if (response) {
          setPassErrors(response?.data?.message);
        }
      } catch (error) {
        if (error) {
          setPassErrors("New passord does not match!");
        } else {
          setPassErrors("");
        }
      } finally {
        setLoading(false);
      }
    } else {
      console.log("Form has errors. Please fix them.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="px-4 w-full md:max-w-md mx-auto py-16"
    >
      {passErrors && (
        <h4 className="p-2 w-full bg-red-200 text-red-600 text-center">
          {passErrors}
        </h4>
      )}
      <div>
        <input
          className={`p-2 border w-full border-gray-200 mt-3 outline-0 rounded-sm focus:border-gray-300 transition-all duration-300  ${
            errors.password ? "border-red-500" : ""
          }`}
          type="password"
          id="password"
          placeholder="Old password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <small className="text-red-500">{errors.password}</small>
      </div>
      <div>
        <input
          className={`p-2 border w-full border-gray-200 mt-7 outline-0 rounded-sm focus:border-gray-300 transition-all duration-300  ${
            errors.newPassword ? "border-red-500" : ""
          }`}
          type="password"
          id="newPassword"
          placeholder="New password"
          name="newPassword"
          value={formData.newPassword}
          onChange={handleChange}
        />
        <small className="text-red-500">{errors.newPassword}</small>
      </div>
      <div>
        <input
          className={`p-2 border w-full border-gray-200 mt-3 outline-0 rounded-sm focus:border-gray-300 transition-all duration-300  ${
            errors.confirmPassword ? "border-red-500" : ""
          }`}
          type="password"
          id="confirmPassword"
          placeholder="Confirm password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <small className="text-red-500">{errors.confirmPassword}</small>
      </div>
      <button
        className="py-1 px-4 mt-3 rounded-sm bg-blue-800 text-white w-full"
        type="submit"
      >
        {loading ? "Changing..." : " Change Password"}
      </button>
    </form>
  );
};

export default ChangePassword;
