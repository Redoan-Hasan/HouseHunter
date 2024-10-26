/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const[loading,setLoading]=useState(true)
    // console.log(user);
    
    
    // createUser 
    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // sign in 
    const logIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    // update profile 
    const updatePhoto = (name,photo) => {
            return updateProfile(auth.currentUser, {
                displayName: name, photoURL: photo}
            ) 
    } 
    // log out 
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    // observer 
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{unSubscribe()};
    },[])
    const authInfo = {user,createUser,updatePhoto,logOut,logIn,loading}
    return (
        <AuthContext.Provider value={authInfo }>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;