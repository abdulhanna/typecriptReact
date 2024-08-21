import { useContext,createContext, useState } from "react"

export type AuthUser = {
    name:string,
    email:string
}

type UserContextProviderProsp = {
    children:React.ReactNode
}

type UserContextProps = {
    user:AuthUser | null,
    setUser : React.Dispatch<React.SetStateAction<AuthUser | null>>

}
// export const UserContext = createContext<UserContextProps| null>(null)
export const UserContext = createContext({} as UserContextProps)  // Using type Assertion

export const UserContextProvider = ({children}:UserContextProviderProsp)=>{
    const [user,setUser] = useState<AuthUser| null>(null)
    return <UserContext.Provider value={{user,setUser}}>{children}</UserContext.Provider>
}