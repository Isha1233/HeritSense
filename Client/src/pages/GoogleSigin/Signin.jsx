import React, { useEffect } from 'react';
import { useState } from 'react';
import { auth, provider } from "./Config";
import { signInWithPopup } from "firebase/auth";
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../store/Auth';

function SignIn() {
    const { email } = useAuth(); // Access email from useAuth hook
    const [value, setValue] = useState(email || '');

    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email);
            localStorage.setItem("email", data.user.email);
           
        });
    }

      useEffect(() => {
        setValue(email || '');
    }, [email]);


    return (
        <div>
            {value ? (
                <NavLink to="/"></NavLink>
            ) : (
                <button onClick={handleClick}>Sign in with Google</button>
            )}
        </div>
    );
}

export default SignIn;
