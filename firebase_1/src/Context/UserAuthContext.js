import { auth } from "../FirebaseConfig"
import { createContext, useContext, useEffect, useState } from 'react'

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {

    //sign up

    //sign in

    //logout

    return (
        <userAuthContext.Provider value={null}>
            {children}
        </userAuthContext.Provider>
    );
}

export default useUserAuth() {
    return useContext(userAuthContext)
} 