import React, { useState, useEffect } from "react";
import { useAuth } from "../store/Auth";

const Profile = () => {
    const { user, services } = useAuth(); // Access user data and services from context

    const [data, setData] = useState({
        email: user?.email || "",
        password: user?.password || "",
        crop: "",
        date: null,
    });

    const [selectedCrop, setSelectedCrop] = useState(null);

    useEffect(() => {
        // Fetch user's profile data when the component mounts
        fetchUserProfile();
    }, []);

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

    return (
        <div className="text-2xl flex">
            <div className="w-1/2">
                <h1>Email: {user.email}</h1>
                <h1>User Name: {user.username}</h1>
                <h1>Selected Crop: {data.crop}</h1>
                <h1>Sown Date: {data.date}</h1>
            </div>
            <div className="w-1/2">
                {selectedCrop && (
                    <div>
                        <h2>{selectedCrop.name}</h2>
                        <img src={selectedCrop.picture} alt={selectedCrop.name} style={{ width: '200px', height: '200px' }} />
                        <p>Growth Time: {selectedCrop.growth_time.months} months {selectedCrop.growth_time.weeks} weeks</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Profile;
