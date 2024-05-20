import { useState, useHistory } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/Auth";
import Signin from "./GoogleSigin/Signin";
import {toast } from 'react-toastify'; 
import { Navbar } from "../components/Navbar";

export const Register = () => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
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
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(user);
        try {
            const response = await fetch(`http://localhost:5000/api/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

            const res_data = await response.json();
            console.log("res from server", res_data);
            if (response.ok) {    
                storeTokenInLS(res_data.token);
                //or localStorage.setItem("token", res_data.token);      to set data on browser localstorage
                setUser({username:"", email:"", phone:"", password:""});
                toast.success("lregistered successfully");
                navigate("/login");
            }
            else{
                toast.error(res_data.extraDetails ? res_data.extraDetails:res_data.message);
            }
           
        } catch (error) {
            console.log("register", error);
        }
    };

    return(
        <>
  <section  className=" justify-center"
      style={{
          backgroundImage: "url('/f6.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundAttachment: "fixed", // This will fix the background image
          minHeight: "84vh", // Ensure the section covers the entire viewport height
      }}
  >
    <Navbar/>
                <main className="">
                    <div className="p-16 px-24">
                    <h1 className="font-semibold mb-4 text-center text-3xl text-white">Registration now</h1>
                    <div className="flex shadow-2xl bg-white grid-two-cols justify-center overflow-hidden  rounded-bl-2xl rounded-tr-2xl ml-60 mr-60">
                    <div className="w-1/2 registration-image  overflow-hidden ">
    <img src="/f2.jpg" alt="a grid is trying to do registration" className="rounded-bl-xl h-full"   />
</div>

    <div className="pt-5 w-1/2 text-xl  flex items-center px-8">
 <div className="text-xl p-2 flex "> 
    <br></br> 
    <form onSubmit={handleSubmit}>
        <div className="mb-3">                     
            <label htmlFor="username">Username :</label>
            <input 
                type="text" 
                name="username" 
                id="username"
                placeholder="Username"
                required 
                value={user.username}
                onChange={handleInput}
                autoComplete="off"
                className="ml-2"
            />
        </div >
        <div className="mb-3"> 
            <label htmlFor="email">Email :</label>
            <input 
                type="text" 
                name="email" 
                id="email"
                value={user.email}
                onChange={handleInput}
                placeholder="Enter your email"
                required 
                autoComplete="off"
                className="ml-2"
            />
        </div>
        <div className="mb-3"> 
            <label htmlFor="phone">Phone : </label>
            <input 
                type="number" 
                name="phone" 
                id="phone"
                value={user.phone}
                onChange={handleInput}
                placeholder="Enter your phone number"
                required 
                autoComplete="off"
                className="ml-2"
            />
        </div>
        <div className="-mb-0.5"> 
            <label htmlFor="password">Password : </label>
            <input 
                type="password" 
                name="password" 
                id="password"
                value={user.password}
                onChange={handleInput}
                placeholder="Enter your password"
                required 
                autoComplete="off"
                className="ml-2"
            />
        </div>
        <br/>
        <div className="mb-4 ">
        <button type="submit" className="ml-20btn btn-submit bg-green-700 rounded-xl p-1.5 px-3 text-white ">Register Now</button>
        </div>
        <div className="mt-2 mb-4 col px-4 text-green-700 bg-gray-100  rounded-full p-1 font-semibold "><button type="submit" className="flex gap-4" ><div><img src="gl.png" className="h-7 mt-0.5 "/></div><div><Signin/></div></button></div>
    </form>
</div>

</div>
                        </div>
                    </div>
                </main>
            </section>
           
        </>
    );
}
