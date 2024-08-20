import React, { useState } from "react";

type AuthUser = {
    name:string,
    email:string
}

export const User = ()=>{
    const [user,setUser] = useState<AuthUser| null>(null)
    
    const handleLogin = ()=>{
        setUser({
            name:"abdul",
            email:"abdul@gmail.com"
        })
    }
    const handleLogout = ()=>{
        setUser(null)
    }
    return <>
    <button onClick={handleLogin}>Login</button>
    <button onClick={handleLogout}>Logout</button>
    <div>User Name is ${user?.name}</div>
    <div>User Email is ${user?.email}</div>
    </>

}