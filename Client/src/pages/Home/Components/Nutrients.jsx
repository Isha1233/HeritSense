export default function Nutrients(){
    return (
      
          <div className="bg-blue-100 w-1/2 container mt-8   rounded-lg shadow-lg">
            <div className="w-[100%]">
            <div className=" mb-2 h-32 mx-auto p-6 bg-white rounded-lg shadow-lg flex items-center"> 
      <img src="/nitrogen.png" className="w-16 h-8 pr-4"/>
      <h1 className="">Nitrogen</h1></div>
      <div className=" mb-2 container mx-auto p-6 bg-white rounded-lg shadow-lg flex items-center"> 
      <img src="/potassium.jpeg" className="w-16 h-8 pr-4"/>
      <h1>Potassium</h1></div>
      <div className=" mb-2 container mx-auto p-6 bg-white rounded-lg shadow-lg flex items-center"> 
      <img src="/phop.png" className="w-16 h-8 pr-4"/>
      <h1>Phosphorus</h1></div>
      <div className="mb-2 bg-white container mx-auto p-6  rounded-lg shadow-lg flex items-center"> 
      <img src="/water.jpeg" className="w-16 h-8 pr-4"/>
      <h1>Water Level</h1></div>
      <div className="mb-2  container mx-auto p-6 bg-white rounded-lg shadow-lg flex items-center"> 
      <img src="/quality.jpg" className="w-16 h-8 pr-4"/>
      <h1>Crop Quality</h1></div>
      </div>
      </div>
           
          
      );
    }