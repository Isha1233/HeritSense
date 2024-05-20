import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
function Service() {
    const navigate = useNavigate();
    const handleButtonClick = () => {
       navigate('/login');
      };

  return (
  <div>
      <Navbar/>
      <div className=" max-w-4xl mx-auto py-10 text-gray-800">
      <h1 className="text-4xl text-yellow-600 font-bold mb-8 text-center">Our Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-8">
        <div className="bg-blue-100 p-4 px-10 flex flex-col items-center">
          <img src="p1.jpg" alt="Crop Cultivation Service" className="w-64 h-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4 text-center">Crop Cultivation Guidance</h2>
          <p className="mb-4 text-center text-blue-900">Our platform provides comprehensive guidance on crop cultivation, helping farmers make informed decisions about what to plant and when. With our intuitive interface, farmers can easily search for crops suitable for their region, learn about the ideal planting months, and understand the time required for each crop to reach maturity. We also provide detailed information on soil preparation, irrigation techniques, and crop rotation strategies to optimize crop growth and yield.</p>
        </div>
        <div className="bg-green-100 p-4 px-10 flex flex-col items-center">
          <img src="p2.jpg" alt="Live Weather Forecasting Service" className="w-64 h-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4 text-center">Live Weather Forecasting</h2>
          <p className="mb-4 text-center text-purple-900">Accurate weather forecasting is essential for effective farm management. Through our integrated weather forecasting tool, farmers can access real-time weather updates tailored to their location. By staying informed about upcoming weather patterns, farmers can proactively plan and adapt their farming activities to maximize yields and minimize risks. Our weather forecasting feature provides detailed forecasts for temperature, precipitation, humidity, and wind speed, enabling farmers to make informed decisions based on current and future weather conditions.</p>
        </div>
        <div className="bg-violet-100 p-4 px-10 flex flex-col items-center">
          <img src="quality.jpg" alt="Crop Disease Management Service" className="w-64 h-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4 text-center">Crop Disease Management</h2>
          <p className="mb-4 text-center text-red-900">Understanding the threat of crop diseases is crucial for maintaining healthy yields. That's why we offer extensive resources on identifying, preventing, and managing common crop diseases. Our expert-backed articles and guides equip farmers with the knowledge they need to safeguard their crops against potential threats. From integrated pest management practices to disease-resistant crop varieties, we provide actionable insights to minimize the impact of diseases on crop production.</p>
        </div>
        <div className="bg-orange-100 p-4 px-10 flex flex-col items-center">
          <img src="p3.jpg" alt="Crop Production Analysis Service" className="w-64 h-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4 text-center">Crop Production Analysis</h2>
          <p className="mb-4 text-center text-orange-900">In addition to real-time weather data, our platform offers advanced analytics for crop production. Farmers can gain valuable insights into their crop yields, identify trends over time, and make data-driven decisions to improve overall productivity. Our comprehensive analysis tools empower farmers to optimize resource allocation, enhance crop quality, and drive long-term success. From yield mapping to cost-benefit analysis, we provide the tools and insights farmers need to maximize profitability and sustainability in their farming operations.</p>
        </div>
        
     
      </div>

      <div className="text-center">
        <p className="text-lg mb-8">Explore our range of services designed to enhance your farming operation. Whether you're looking for guidance on crop cultivation, disease management, weather forecasting, or crop production analysis, we've got you covered. Join us in our mission to revolutionize agriculture and empower farmers worldwide.</p>
        <button
      className="bg-green-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700 transition duration-300"
      onClick={handleButtonClick}
    >
      Get Started
    </button>
      </div>
    </div></div>
  );
}

export default Service;
