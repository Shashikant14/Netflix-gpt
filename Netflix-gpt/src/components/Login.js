import React from "react";
import Header from "./Header";
import { useState } from "react";

export const Login = () => {

    const [isSignInform, setIsSignInform] = useState(true);

    const toggleSignInform = () =>{
        setIsSignInform(!isSignInform);
    }

    return(
        <div>
        <Header/>
        <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/6678e2ea-85e8-4db2-b440-c36547313109/IN-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_3457a8b1-284d-4bb5-979e-2a2e9bb342b3_large.jpg"
            alt="background-img"
            />
        </div>
        <form className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-80">
            <h1 className="font-bold text-3xl p-4">{isSignInform ? "Sign In" : "Sign Up"}</h1>
            {!isSignInform && 
            <input type="text" placeholder="Full Name" className="p-4 my-4 w-full text-lg bg-gray-700"/>}           
            <input type="text" placeholder="Email Address" className="p-4 my-4 w-full text-lg bg-gray-700"/>
            <input type="text" placeholder="Password" className="p-4 text-lg my-4 w-full bg-gray-700"/>
            <button className="p-4 my-6 bg-red-700 w-full rounded-lg">Sign In</button>
            <p className="p-4 my-4 text-lg cursor-pointer" onClick={toggleSignInform}>{isSignInform ? "new to Netflix? SignUp now" : "Already Registered? SignIn now"}</p>
        </form>
        </div>
    )
}

