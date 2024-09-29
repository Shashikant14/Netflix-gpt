import React, { useRef } from "react";
import Header from "./Header";
import { useState } from "react";
import {checkValid} from "../utils/validate";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";

export const Login = () => {

    const [isSignInform, setIsSignInform] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInform = () =>{
        setIsSignInform(!isSignInform);
    }

    const handleClickButton = () => {
        const message = checkValid(email.current.value,password.current.value);
        setErrorMessage(message);
        if(message) return ;

        // SignIN/SignUp Logic
        if(!isSignInform){
            // Sign Up Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value , photoURL: USER_AVATAR
                  }).then(() => {
                    const {uid,email,displayName, photoURL} = auth.currentUser;
                    dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
                  }).catch((error) => {
                        
                  });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" + errorMessage);
            });
        }
        else{
            // Sign In Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {                 
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" + errorMessage);
            });
        }
    }

    return(
        <div>
        <Header/>
        <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/6678e2ea-85e8-4db2-b440-c36547313109/IN-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_3457a8b1-284d-4bb5-979e-2a2e9bb342b3_large.jpg"
            alt="background-img"
            />
        </div>
        <form onSubmit={(e) => {e.preventDefault()}} className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-80">
            <h1 className="font-bold text-3xl p-4">{isSignInform ? "Sign In" : "Sign Up"}</h1>
            {!isSignInform && 
            <input ref={name} type="text" placeholder="Full Name" className="p-4 my-4 w-full text-lg bg-gray-700"/>}           
            <input ref={email} type="text" placeholder="Email Address" className="p-4 my-4 w-full text-lg bg-gray-700"/>
            <input ref={password} type="password" placeholder="Password" className="p-4 text-lg my-4 w-full bg-gray-700"/>
            <p className="text-lg text-red-500">{errorMessage}</p>
            <button onClick={handleClickButton} className="p-4 my-6 bg-red-700 w-full rounded-lg">{isSignInform ? "Sign In" : "Sign Up"}</button>
            <p className="p-4 my-4 text-lg cursor-pointer" onClick={toggleSignInform}>{isSignInform ? "new to Netflix? SignUp now" : "Already Registered? SignIn now"}</p>
        </form>
        </div>
    )
}

