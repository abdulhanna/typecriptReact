import React, { useState,useContext } from 'react'
 import { UserContext } from './UserContext'
type AuthUser={
    name:string
    email:string
}
const User = () => {
   const userContext = useContext(UserContext)
    const handleLogin = ()=>{
        userContext?.setUser({
            name:"abdul",
            email:"abdul@gmail.com"
        })
    }
    const handleLogOut = ()=>{
          // setUser(null) 
          if(userContext){
            userContext?.setUser(null)
          }
    }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogOut}>Log out</button>
      <div>User Name -{userContext?.user?.name}</div>
      <div>User Email -{userContext?.user?.email}</div>
    </div>
  )
}

export default User
