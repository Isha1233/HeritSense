import { NavLink } from 'react-router-dom';
import "./Navbar.css";
import { useAuth } from "../store/Auth";

export const Navbar = () => {
    const { isLoggedIn } = useAuth();
    const {isSignin}=useAuth();
    
    return (
        <header className="px-56">
            <div className="flex gap-6 justify-between p-4 text-2xl  bg-gradient-to-br  to-green-900 from-blue-100 font-medium text-green-950   ">
                <div className="">
                    <div className='text-yellow-950 font-bold text-4xl pl-8' >HeritSense</div>
                </div>
                <nav>
                    <ul>
                      
                    {isLoggedIn || isSignin  ?(
                         <>
                         <li className='hover:bg-pink-700 px-3 py-1 rounded-xl hover:text-green-50 mr-7'><NavLink to="/">Home</NavLink></li>
                         <li className='hover:bg-pink-700 px-3 py-1 rounded-xl hover:text-green-50 mr-7'><NavLink to="/profile">Profile</NavLink></li>

                        
                          </>
                    )
                        : ( <><li className='hover:bg-red-700 px-3 py-1 rounded-xl hover:text-green-50 '><NavLink to="/about">About</NavLink></li>
                    <li className='hover:bg-red-700 px-3 py-1 rounded-xl hover:text-green-50 '><NavLink to="/service">Service</NavLink></li> </>  
                    )}
                    
                        
                    <li className='hover:bg-pink-700 px-3 py-1 rounded-xl hover:text-green-50'><NavLink to="/contact">Contact</NavLink></li>
                       
                        {isLoggedIn || isSignin ?  (
                            <li className='hover:bg-red-700 px-3 py-1 rounded-xl hover:text-green-50 mr-9'>
                                <NavLink to="/logout">Logout</NavLink>
                                
                            </li>
                        ) : (
                            <>
                                <li className='hover:bg-red-700 px-3 py-1 rounded-xl hover:text-green-50'><NavLink to="/register">Register</NavLink></li>
                                <li className='hover:bg-red-700 px-3 py-1 rounded-xl hover:text-green-50 mr-6'><NavLink to="/login">Login</NavLink></li>
                            </>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
};
