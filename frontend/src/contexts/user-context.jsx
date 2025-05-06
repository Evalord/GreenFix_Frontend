import React, { createContext, useState, useEffect, useContext } from "react"
import { useAuth } from "./auth-context"
import { AuthProvider } from "../Components/Authentification/AuthContext"

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
 //const { user: authUser, loading: authLoading } = useAuth()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate fetching user data
    setTimeout(() => {
      setUser({ name: "John Doe", role: "Admin" });
      setLoading(false);
    }, 1000);
  }, []);

{/*  useEffect(() => {
    if (!authLoading) {
      if (authUser) {
        // In a real app, you might fetch additional user data here
        setUser(authUser)
      } else {
        setUser(null)
      }
      setLoading(false)
    }
  }, [authUser, authLoading])
*/}

  return (
    <UserContext.Provider value={{ user, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error("useUser must be used within a UserProvider")
  }
  return context
};
