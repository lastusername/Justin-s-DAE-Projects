import { auth } from "../FirebaseConfig"
import { createContext, useContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth/cordova";


const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {

    const [user, setUser] = useState({});



    //sign up
function signUp (email, password) {
return createUserWithEmailAndPassword(auth, email, password)
}
    //sign in
    function login(email, password){
        return signInWithEmailAndPassword(auth, email, password);
    }
    //logout
function logout(){
    return signOut(auth);
}
useEffect(() => {
    const unfollow = onAuthStateChanged(auth, (currentUser) =>  {
        setUser(currentUser);
        //clean up with useEffect
        return () => {
            unfollow()
        }
    }); 
}, []);

    return (
        <userAuthContext.Provider value={ {signUp, login, logout, user} }>
            {children}
        </userAuthContext.Provider>
    );
}

export function useUserAuth() {
    return useContext(userAuthContext)
} 