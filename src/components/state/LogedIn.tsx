import { useState } from "react"

export const  LoggedInn =()=>{
    const [isLoggedIn,setIsLoggedIn] = useState(false)

    const handleLogin = ()=>{
         setIsLoggedIn(true)
    }
    const handleLogout = ()=>{
        setIsLoggedIn(true)
   }
  return <>
  <div>
    <button onClick={handleLogin}>Login</button>
    <button onClick={handleLogout}>Log Out</button>
    <div>User is {isLoggedIn ? "logged In":"Logged Out"}</div>
  </div>
  </>  
}