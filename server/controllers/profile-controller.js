const Profile = require("../models/profile-model");
const Service = require("../models/service-model");

// Form for user profile
const profileForm = async (req, res) => {
    try {
        const { crop, date, email, password } = req.body;
        // Parse date into day, month, year
        const [year, month, day] = date.split('-');
        const profileData = { email, password, crop, day, month, year };
        await Profile.create(profileData);
        return res.status(200).json({ message: 'Profile created successfully' });
    } catch(error) {
        return res.status(500).json({ message: "Profile creation failed", error: error.message });
    }
};

// Endpoint to fetch services
const services = async (req, res) => {
    try {
        const response = await Service.find();
        if (response.length === 0) {
            return res.status(404).json({ msg: "No service found" });
        }
        return res.status(200).json({ msg: response });
    } catch(error) {
        console.error(`Error fetching services: ${error}`);
        return res.status(500).json({ message: "Error fetching services", error: error.message });
    }
};


const getUserProfile = async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user._id });
        if (profile) {
            return res.status(200).json({ profile });
        } else {
            return res.status(404).json({ message: 'Profile not found' });
        }
    } catch (error) {
        return res.status(500).json({ message: "Error fetching user profile", error: error.message });
    }
};

module.exports = { profileForm, services, getUserProfile };
