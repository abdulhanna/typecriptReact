import React, { useState } from 'react'
 
type AuthUser={
    name:string
    email:string
}
const User = () => {
    // const [user,setUser] = useState<AuthUser| null>(null)
    const [user,setUser] = useState<AuthUser>({} as AuthUser)
    const handleLogin = ()=>{
       setUser({
        name:"Abdul",
        email:"abdul@example.com"
       })
    }
    const handleLogOut = ()=>{
          // setUser(null) 
    }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogOut}>Log out</button>
      <div>User Name - {user?.name}</div>
      <div>User Email -{user?.email} </div>
    </div>
  )
}

export default User
