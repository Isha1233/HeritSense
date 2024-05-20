import React from "react";
import {useAuth} from "../../../store/Auth"
// import {useAuth} from "..\store\Auth.jsx"
export default function Profile() {
  const {user} =useAuth();
  return (
    <div className=" w-1/2 -mt-1.5">
      <div className="bg-blue-100 container mx-auto mt-8 p-6  rounded-lg shadow-lg flex items-center">
        <div className=" w-1/2 pr-4">
          <img src="/crop.jpeg" alt="User" className=" h-full rounded-lg" />
        </div>
        <div className="h-full w-1/2 mb-9">
             <div className="flex gap-2">
          <h2 className="text-2xl ml-4 font-bold mb-2">Welcome <h1>{user? ` ${user.username} `:``}</h1></h2>
          <img src="./hey.png" className='h-12 -mt-2 '/></div>
          <p className="mb-1 ml-4"><strong>Name:</strong> Corn</p>
          <p className="mb-1 ml-4"><strong>Sown:</strong>__-____</p>
          <p className="mb-1 ml-4"><strong>Harvest</strong> __-____</p>
          <p className="mb-1 ml-4"><strong>Crop Condition:</strong> Healthy</p>
          <p className="mb-1 ml-4"><strong>Currnet Requirment:</strong>Water</p>
          <p className="mb-1 ml-4"><strong>Crop Desises:</strong> x%</p>
        </div>
      </div>
    </div>
  );
}
