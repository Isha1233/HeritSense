import React from 'react';
import { Navbar } from '../components/Navbar';
// Import placeholder image

function About() {
  return (
    <div><Navbar/>
    <div class="max-w-4xl mx-auto p-8 text-gray-800 bg-gradient-to-br from-green-500 to-yellow-500">
      <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
      <p className="mb-8">Welcome to <span className="font-bold text-green-600">[Website Name]</span>, your trusted partner in agricultural excellence. We are dedicated to empowering farmers with the knowledge and tools they need to enhance crop yields, mitigate risks, and ensure sustainable agricultural practices. Our platform serves as a comprehensive resource hub for farmers of all experience levels, providing valuable insights, expert guidance, and innovative solutions to address the challenges faced in modern agriculture.</p>

      <h2 className="text-3xl font-bold mb-4 text-center">Our Mission</h2>
      <p className="mb-8">At <span className="font-bold text-green-600">[Website Name]</span>, we are driven by a singular mission: to uplift farmers and revolutionize agriculture through innovation and education. We strive to create a platform where farmers can access vital information, connect with experts, and leverage cutting-edge technologies to optimize their farming practices. By fostering a community of collaboration and knowledge-sharing, we aim to empower farmers to achieve greater efficiency, productivity, and sustainability in their farming operations.</p>

      <h2 className="text-3xl font-bold mb-4 text-center">What We Offer</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="flex flex-col items-center">
          <img src="f1.jpg" alt="Crop Cultivation" className="w-64 h-auto mb-4" />
          <p className="mb-4 text-center text-blue-900">Our platform provides comprehensive guidance on crop cultivation, helping farmers make informed decisions about what to plant and when. With our intuitive interface, farmers can easily search for crops suitable for their region, learn about the ideal planting months, and understand the time required for each crop to reach maturity. We also provide detailed information on soil preparation, irrigation techniques, and crop rotation strategies to optimize crop growth and yield.</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="f1.jpg" alt="Crop Disease Management" className="w-64 h-auto mb-4" />
          <p className="mb-4 text-center text-red-900">Understanding the threat of crop diseases is crucial for maintaining healthy yields. That's why we offer extensive resources on identifying, preventing, and managing common crop diseases. Our expert-backed articles and guides equip farmers with the knowledge they need to safeguard their crops against potential threats. From integrated pest management practices to disease-resistant crop varieties, we provide actionable insights to minimize the impact of diseases on crop production.</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="f1.jpg" alt="Farmer Profiles and Crop Management" className="w-64 h-auto mb-4" />
          <p className="mb-4 text-center text-purple-900">Farmers are the backbone of agriculture, and we believe in providing them with the tools to succeed. Our platform features personalized farmer profiles where users can store and analyze their crop details, track growth progress, and receive customized recommendations for optimizing crop health and productivity. Farmers can maintain comprehensive records of their farming activities, including planting schedules, fertilization regimes, and harvest yields, allowing for greater insights and decision-making capabilities.</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="f1.jpg" alt="Live Weather Forecasting" className="w-64 h-auto mb-4" />
          <p className="mb-4 text-center text-orange-900">Accurate weather forecasting is essential for effective farm management. Through our integrated weather forecasting tool, farmers can access real-time weather updates tailored to their location. By staying informed about upcoming weather patterns, farmers can proactively plan and adapt their farming activities to maximize yields and minimize risks. Our weather forecasting feature provides detailed forecasts for temperature, precipitation, humidity, and wind speed, enabling farmers to make informed decisions based on current and future weather conditions.</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="f1.jpg" alt="Crop Production Analysis" className="w-64 h-auto mb-4" />
          <p className="mb-4 text-center text-yellow-900">In addition to real-time weather data, our platform offers advanced analytics for crop production. Farmers can gain valuable insights into their crop yields, identify trends over time, and make data-driven decisions to improve overall productivity. Our comprehensive analysis tools empower farmers to optimize resource allocation, enhance crop quality, and drive long-term success. From yield mapping to cost-benefit analysis, we provide the tools and insights
          farmers need to maximize profitability and sustainability in their farming operations.</p>
        </div>
      </div>

      <div className="text-center">
        <p className="text-lg mb-8">Join us in our mission to revolutionize agriculture and empower farmers worldwide. Whether you're a seasoned farmer or just starting out, <span className="font-bold text-green-600">[Website Name]</span> is your trusted partner every step of the way. Explore our platform, unlock valuable insights, and take your farming operation to new heights of success.</p>
        
      </div>
    </div></div>
  );
}

export default About;
