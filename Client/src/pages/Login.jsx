import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/Auth';
import Signin from "./GoogleSigin/Signin";
import {toast } from 'react-toastify'; 
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';


const URL="http://localhost:5000/api/auth/login";

const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();
    const { storeTokenInLS } = useAuth();

    const handleInput = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setUser({
            ...user,
            [name]: value,
        }); 
    };

    // Handling form submission
    const handleSubmit = async(event) => {
        event.preventDefault();
        console.log(user);
        try{
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            console.log("loginform", response);

            const res_data = await response.json();
            if(response.ok) {
                storeTokenInLS(res_data.token);
                setUser({email:"", password:""});
                toast.success("login successfully");
                navigate("/");
            } else {
                toast.error(res_data.extraDetails);
            }
        } catch(error) {
            console.log("error from login", error);
        }  
    };

    return(
        <>
            <section className='w-full'
             style={{ 
                backgroundImage: "url('/f8.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width:"100%",
                
              }}
              >
                <Navbar/>
                <main className='py-36 mx-96  text-xl'>
                    <div className="mx-24 rounded-3xl font-semibold bg-white">
                        <div className ="text-center content-center px-20 ">
                            {/* <div className="registration-image">
                                <img src="f1.jpg" alt="a grid is trying to do registration" width="500" height="500"></img>
                            </div> */}
                            <div className="mt-8">
                                <h1 className="font-bold  text-3xl ">Login form</h1>
                                <br></br> 
                                <form onSubmit={handleSubmit} className='bg-white  text-center'>
                                <div className='mb-4 '>
                                        <label htmlFor="email">Email :   </label>
                                        <input type="text" 
                                            name="email" 
                                            id="email"
                                            value={user.email}
                                            onChange={handleInput}
                                            placeholder="Enter your email"
                                            required 
                                            autoComplete="off">
                                        </input>
                                    </div>
                                    <div className=''>
                                        <label htmlFor="password">Password : </label>
                                        <input type="password" 
                                            name="password" 
                                            id="password"
                                            value={user.password}
                                            onChange={handleInput}
                                            placeholder="Enter your password"
                                            required 
                                            autoComplete="off">
                                        </input>
                                    </div>
                                    <br/>
                                    <div className=''>
                                    <button type="submit" className="bg-yellow-500 px-7 text-white font-semibold  py-2.5 rounded-3xl">Login</button>
                                    
                                    </div>
                                    <h className="text-red-500 text-sm p-1 ">forgot <Link to ="/ForgoPassword">Password?</Link> </h>
                                    <div>
                                    <div className="my-4 mx-6 mb-8 col px-4 text-yellow-500 bg-yellow-100  rounded-2xl p-2 font-semibold ">
                                        <button type="submit" className="flex px-8 gap-6" ><div><img src="gl.png" className="h-8 mt-0.5 "/></div><div><Signin/></div></button></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
};

export default Login;
