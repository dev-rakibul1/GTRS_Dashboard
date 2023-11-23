import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (auth) {
          const response = await axios.get(
            "http://localhost:7000/api/v1/user/user-filter",
            {
              headers: {
                authorization: `${localStorage.getItem("accessToken")}`,
                "Content-Type": "application/json",
              },
            }
          );

          const userData = response.data;

          setUsers(userData);
          setLoading(true);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  const authPayload = {
    name: "Rakibul islam",
    auth,
    setAuth,
    users,
    loading,
    setLoading,
  };

  return (
    <AuthContext.Provider value={authPayload}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
