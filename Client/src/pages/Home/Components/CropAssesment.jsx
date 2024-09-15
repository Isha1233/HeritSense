import React from "react";

export default function CropAssesment() {
  return (
    <div className=" w-1/2 grid grid-cols-1 md:grid-cols-3 gap-6 text-center pt-6">
      <div className=" bg-blue-100 shadow-lg  p-4 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
        <img src="/havs.png" alt="Cinematography" className="w-24 h-16 mx-auto mb-2"></img>
        <div className="text-base font-semibold mb-2">2months/3days</div>
        
      </div>

      <div className=" bg-blue-100 shadow-lg  p-4 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
        <img src="/humid.png" alt="Art" className="w-16 h-16 mx-auto mb-2"></img>
        <div className="text-base font-semibold mb-2">Humidity</div>
      </div>

      <div className="bg-blue-100  shadow-lg p-4 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
        <img src="/temp.png" alt="Cinematography" className="w-24 h-16 mx-auto mb-2"></img>
        <h1>23</h1>
        <div className="text-base font-semibold mb-2">Temperature</div>
        
      </div>

      <div className=" bg-blue-100 shadow-lg p-4 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
        <img src="/cam.png" alt="Cinematography" className="w-24 h-16 mx-auto mb-2"></img>
        <div className="text-base font-semibold mb-2">Desise Detection</div>
        
      </div>
      <div className=" bg-blue-100 shadow-lg p-4 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
        <img src="/hlth.png" alt="Cinematography" className="w-28 h-20 mx-auto mb-2"></img>
        <div className="text-base font-semibold mb-2">Crop Health</div>
        
      </div>
      <div className=" bg-blue-100 shadow-lg p-4 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
        <img src="/bell.png" alt="alarm" className="w-24 h-16 mx-auto mb-2"></img>
        <div className="text-base font-semibold mb-2">Reminder Alarm</div>
        
      </div>
    </div>
  )
}
