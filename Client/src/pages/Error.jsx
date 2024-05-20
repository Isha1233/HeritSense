import {NavLink} from "react-router-dom";
export const Error=()=>{

return (
    <>
    <section id="error-page" >
        <div className="flex-col content-center  ">
            <div className="mt-3">
            <h2 className="header text-9xl font-semibold text-purple-900">404</h2></div>
            <div className="mt-6 text-xl"> <h4>Sorry! Page not found</h4></div>
            <div className="mt-6 text-4xl text-purple-400 font-bold"><p>
                Oops!</p></div>
                <div className="mt-6"> <div className="  flex justify-center gap-12">
                    <NavLink to="/" className="bg-purple-800 p-2 rounded-md text-white text-lg">return home</NavLink>
                    <NavLink to="/contact" className="bg-purple-800 p-2 rounded-md text-white text-lg">reporte problem</NavLink>
                    </div>
                    </div></div>
                    </section>
                    
                    </>
)
    
}


