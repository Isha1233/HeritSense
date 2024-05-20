import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState([]);
    const [selectedDay, setSelectedDay] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [location, setLocation] = useState(null);
    const [showWeekOptions, setShowWeekOptions] = useState(false);
    const [showSelectedDay, setShowSelectedDay] = useState(false);

    useEffect(() => {
        const fetchWeatherByLocation = async (latitude, longitude) => {
            try {
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=2b531f3b3d8e49339f36fb75ed38d21c`
                );
                setWeatherData(response.data);
            } catch (error) {
                setError("Error fetching weather data. Please try again later.");
            }
        };

        const fetchForecastByLocation = async (latitude, longitude) => {
            try {
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=2b531f3b3d8e49339f36fb75ed38d21c`
                );
                setForecastData(response.data.list);
            } catch (error) {
                setError("Error fetching forecast data. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        const getLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    async (position) => {
                        const { latitude, longitude } = position.coords;
                        setLocation({ latitude, longitude });
                        fetchWeatherByLocation(latitude, longitude);
                        fetchForecastByLocation(latitude, longitude);
                    },
                    (error) => {
                        setError("Error fetching location data. Please enable location access.");
                        setLoading(false);
                    }
                );
            } else {
                setError("Geolocation is not supported by this browser.");
                setLoading(false);
            }
        };

        getLocation();
    }, []);

    const handleDayChange = (index) => {
        setSelectedDay(index);
        setShowWeekOptions(false);
        setShowSelectedDay(true); // Show the selected day section
    };

    const resetDaySelection = () => {
        setSelectedDay(null);
        setShowSelectedDay(false); // Hide the selected day section
    };

    const filteredForecast = forecastData.filter((item) => {
        const date = new Date(item.dt * 1000);
        return selectedDay !== null && date.getDay() === selectedDay;
    });

    return (
        <div className="container bg-blue-100  my-8   rounded-lg shadow-lg">
            {error && <p className="text-red-500">{error}</p>}
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <div className="">
                        <div className="grid grid-flow-col justify-around ">
                            <h2 className="-mt-1  mx-16 text-lg font-semibold">{weatherData.name}:</h2>
                            <div className="flex  mx-8  justify-around ">
                                <img
                                    className="w-10 h-10 -mt-1.5 "
                                    src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                                    alt="Weather Icon"
                                />
                                {Math.round(weatherData.main.temp - 273.15)}°C,{" "}
                                {weatherData.weather[0].main}
                            </div>
                            <div>
                            <p className=" mx-16"> Humidity: {weatherData.main.humidity}%</p></div>
                            <div className=" mx-16"> <p>Wind Speed: {Math.round(weatherData.wind.speed * 3.6)} km/h</p>
                            </div>
                        <button
                            className=" mx-16 font-semibold -mt-2 bg-blue-500 text-white px-4  rounded"
                            onClick={() => setShowWeekOptions(!showWeekOptions)}
                        >
                            Select Day
                        </button>
                    </div></div>
                    {showWeekOptions && (
                        <div className="flex overflow-x-auto mb-4">
                            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
                                <button
                                    key={index}
                                    className={`mr-4 px-4 py-2 rounded ${
                                        selectedDay === index ? "bg-blue-500 text-white" : ""
                                    }`}
                                    onClick={() => handleDayChange(index)}
                                >
                                    {day}
                                </button>
                            ))}
                        </div>
                    )}
                    {showSelectedDay && selectedDay !== null && (
                        <div className="mt-8">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-semibold mb-2">Forecast:</h2>
                                <button
                                    className="text-red-500"
                                    onClick={resetDaySelection}
                                >
                                    &#x2715;
                                </button>
                            </div>
                            <ul>
                                {filteredForecast.map((item, index) => (
                                    <li key={index} className="mb-2">
                                        <span className="font-semibold">
                                            {new Date(item.dt * 1000).toLocaleTimeString()}:
                                        </span>{" "}
                                        {Math.round(item.main.temp - 273.15)}°C,{" "}
                                        {item.weather[0].description}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Weather;
