import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../store/Auth";

 const Logout = () => {
    const {LogoutUser} = useAuth();
    const {Signout}=useAuth();


    useEffect(() => {
        LogoutUser();
        Signout()

    }, [LogoutUser,Signout]);
    
    return <Navigate to="/login" />;
};
export default Logout;
