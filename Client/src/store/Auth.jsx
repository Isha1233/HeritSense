import React, { useState, createContext, useContext, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState('');
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [services,setServices]=useState('');
  
  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  //sign out
  let isSignin=!!email;
  console.log("isSignin", isSignin);

  const Signout=()=>{
    setEmail("");
    return localStorage.removeItem("email");
  }


  let isLoggedIn = !!token;
  console.log("isLoggedIn", isLoggedIn);

  // Dealing with logout functionality
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  //JWT AUTHENTICATION- TO GET CURRENTLY LOGGED IN USER DATA

  const userAuthentication = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, // Fixed typo "Beare" to "Bearer"
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log("user data", data.userData);
        setUser(data.userData);
      }
    } catch (error) {
      console.log("Error in fetching user data");
    }
  };

  const getService = async () => {
    try {
        const response = await fetch(`http://localhost:5000/api/userdata/service`, {
            method: "GET",
        });
        if (response.ok) {
            const res_data = await response.json();
            console.log("Service data:", res_data);
            // Assuming res_data contains an array of services
            setServices(res_data.msg);
        } else {
            console.error("Failed to fetch service data:", response.status);
            // Handle error response (e.g., show error message to the user)
        }
    } catch (error) {
        console.error("Error fetching service data:", error);
        // Handle fetch error (e.g., show error message to the user)
    }
};


  useEffect(() => {
    userAuthentication();
    getService();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS,isSignin, LogoutUser,Signout, user,services }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};
