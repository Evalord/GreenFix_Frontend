

import { createContext, useState, useEffect, useContext } from "react"

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem("greenfix_user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    // In a real app, this would make an API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Mock authentication
        if (email === "admin@greenfix.com" && password === "password") {
          const userData = {
            id: 1,
            name: "Admin User",
            email: "admin@greenfix.com",
            role: "admin",
          }
          setUser(userData)
          localStorage.setItem("greenfix_user", JSON.stringify(userData))
          resolve(userData)
        } else if (email && password) {
          // For demo purposes, any non-empty email/password works
          const userData = {
            id: 2,
            name: email.split("@")[0],
            email: email,
            role: "collector",
          }
          setUser(userData)
          localStorage.setItem("greenfix_user", JSON.stringify(userData))
          resolve(userData)
        } else {
          reject(new Error("Invalid credentials"))
        }
      }, 1000)
    })
  }

  const register = async (name, email, password, role) => {
    // In a real app, this would make an API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Mock registration
        if (email && password) {
          const userData = {
            id: Math.floor(Math.random() * 1000),
            name,
            email,
            role,
          }
          setUser(userData)
          localStorage.setItem("greenfix_user", JSON.stringify(userData))
          resolve(userData)
        } else {
          reject(new Error("Invalid registration data"))
        }
      }, 1000)
    })
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("greenfix_user")
  }

  return <AuthContext.Provider value={{ user, loading, login, register, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === null) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
