import React, { useState, useEffect } from "react";
import { useAuth } from "../store/Auth";
import { Navbar } from "../components/Navbar";

const Profile = () => {
    const { user } = useAuth(); // Access user data from context

    // Define local state for services and user profile data
    const [services, setServices] = useState([]);
const [data, setData] = useState(() => {
    // Load data from localStorage or initialize with default values
    const storedData = localStorage.getItem("profileData");
    const defaultData = {
        email: user?.email || "",
        password: user?.password || "",
        crop: "",
        date: null,
    };
    return storedData ? JSON.parse(storedData) : defaultData;
});


    const [selectedCrop, setSelectedCrop] = useState(null);
    const [isUpdated, setIsUpdated] = useState(false); // State variable to track if data is updated

    useEffect(() => {
        // Fetch services data when the component mounts
        fetchServices();
    }, []);

    useEffect(() => {
        // Fetch user's profile data when the component mounts
        fetchUserProfile();
    }, []);

    const fetchServices = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/userdata/service`);
            if (response.ok) {
                const data = await response.json();
                console.log("service profile", data.msg);
                setServices(data.msg); // Update the services state with fetched data
            } else {
                console.error("Error fetching services:", response.statusText);
            }
        } catch (error) {
            console.error("Error fetching services:", error);
        }
    };

    const fetchUserProfile = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/userdata/profile`, {
                headers: {
                    "Authorization": `Bearer ${user.token}`,
                },
            });
            if (response.ok) {
                const userData = await response.json();
                setData({
                    email: user.email,
                    password: user.password,
                    crop: userData.profile.crop,
                    date: userData.profile.date,
                });
                // Find the selected crop from services and update selectedCrop state
                const crop = services.find(service => service.name === userData.profile.crop);
                setSelectedCrop(crop);
            }
        } catch (error) {
            console.error("Error fetching user profile:", error);
        }
    };

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
        // Find the selected crop from services and update selectedCrop state
        const crop = services.find(service => service.name === value);
        setSelectedCrop(crop);
    };

    const submitHandler = async (event) => {
        event.preventDefault();

        try {
            console.log("Data to be submitted:", data); 
            const response = await fetch(`http://localhost:5000/api/userdata/profile`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${user.token}`,
                },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                const res_data = await response.json();
                console.log("data saved", res_data);
                setIsUpdated(true); // Set isUpdated to true after successfully updating data
            } else {
                console.error("Error response from server:", response.statusText);
            }
        } catch (error) {
            console.error("Error in submitHandler:", error);
        }
    };

    useEffect(() => {
        // Save data to localStorage whenever it changes
        localStorage.setItem("profileData", JSON.stringify(data));
    }, [data]);
    

    // Check if the entered email matches the user's email
    const isMatchingEmail = user.email === data.email;
console.log(data.email,"data");console.log(user.email,"user");
    return (
      
        <div className="text-2xl flex">
           <Navbar/> 
                <div className="w-1/2">
                    <form onSubmit={submitHandler}>
                        <div>
                            <h1>Email: {user.email}</h1>
                        </div>
                        <div>
                            <h1>User Name: {user.username}</h1>
                        </div>
                        <div>
                            <h1>Choose Crop</h1>
                            <select
                                name="crop"
                                value={data.crop}
                                onChange={changeHandler}
                            >
                                <option value="">Select Crop</option>
                                {services && services.map(service => (
                                    <option key={service._id} value={service.name}>{service.name}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <h1>Sown Date</h1>
                            <input
                                type="date"
                                name="date"
                                value={data.date}
                                onChange={changeHandler}
                            />
                        </div>
                        <div className="">
                            <button type="submit" className="btn btn-submit bg-green-700 rounded-lg p-2 text-white">Submit</button>
                        </div>
                    </form>
                </div>
           
            <div className="w-1/2">
                {selectedCrop && (
                    <div>
                        <h2>{selectedCrop.name}</h2>
                        <img src={selectedCrop.picture} alt={selectedCrop.name} style={{ width: '200px', height: '200px' }} />
                        <p>Growth Time: {selectedCrop.growth_time.months} months {selectedCrop.growth_time.weeks} weeks</p>
                    </div>
                )}
                {/* Display entered profile data */}
                {isMatchingEmail ? (
                <div>
                    <h1>Email: {data.email}</h1>
                    <h1>User Name: {user.username}</h1>
                    <h1>Selected Crop: {data.crop}</h1>
                    <h1>Sown Date: {data.date}</h1>
                </div>
                 ) : (
                    <div className="w-1/2">
                        <h1>This profile does not exist.</h1>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Profile;
