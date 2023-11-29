import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Check for the existence of authentication tokens
        const token = localStorage.getItem("accessToken");

        // Fetch user data or perform other authentication checks
        const response = await axios.get(
          "https://gtrs.vercel.app/api/v1/user/user-filter",
          {
            headers: {
              Authorization: `${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        const userData = response.data;

        setUsers(userData);
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log("Auth Provider data: ", users);

  const authPayload = {
    users,
    loading,
    setLoading,
    isAuthenticated,
  };

  return (
    <AuthContext.Provider value={authPayload}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
