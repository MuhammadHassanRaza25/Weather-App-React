import "./App.css";
import WeatherForecast from "./components/WeatherForecast";
import WeatherBanner from "./components/WeatherBanner";
import WeatherDetails from "./components/WeatherDetails";
import Footer from "./components/Footer";
import weatherlogo from "./assets/images/weatherlogo.png";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [cityName, setCityName] = useState("karachi");
  const [weatherData, setWeatherData] = useState(
    {
      coord: { lon: 67.0822, lat: 24.9056 },
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" },
      ],
      base: "stations",
      clouds: { all: 0 },
      cod: 200,
      coord: { lon: 67.0822, lat: 24.9056 },
      dt: 1742612932,
      id: 1174872,
      main: {
        feels_like: 24.64,
        grnd_level: 1011,
        humidity: 88,
        pressure: 1015,
        sea_level: 1015,
        temp: 23.9,
        temp_max: 23.9,
        temp_min: 23.9,
      },
      name: "Karachi",
      sys: {
        country: "PK",
        sunrise: 1742607223,
        sunset: 1742651002,
        type: 1,
      },
      timezone: 18000,
      visibility: 3000,
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" },
      ],
      wind: { speed: 0, deg: 0 },
    },
  );
  const [currentTime, setCurrentTime] = useState("");
  const [currentDay, setCurrentDay] = useState("");

  let search = async (city) => {
    try {
      let fetchingData = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`
      );
      let data = await fetchingData.json();
      setWeatherData(data);
      setCityName("")
    } catch (error) {
      console.log("<== Error in fetching api ==>", error);
    }
  };

  let handleSearch = () => {
    search(cityName);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  console.log(weatherData);
  // console.log('s===>', weatherData.sys.sunset);

  // this is for showing current time & day
  useEffect(() => {
    if (weatherData && weatherData.timezone) {
      const timezoneOffsetSeconds = weatherData.timezone;
      const localTime = new Date();
      const utc = localTime.getTime() + localTime.getTimezoneOffset() * 60000;
      const targetTime = new Date(utc + timezoneOffsetSeconds * 1000);

      const formattedTime = new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }).format(targetTime);

      setCurrentTime(formattedTime);

      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const dayName = days[targetTime.getDay()];
      setCurrentDay(dayName);
    }
  }, [weatherData]);

  return (
    <>
      <div className="flex lg:bg-transparent bg-white justify-between lg:flex-row lg:gap-0 gap-3 flex-col lg:py-5 py-4 lg:px-10 px-5 lg:mb-0 mb-8">
        <div>
          <h1 className="flex items-end lg:p-0 p-2 lg:rounded-none rounded-lg gap-1.5 text-indigo-800 lg:text-2xl md:text-2xl text-xl font-bold">
            <img
              className="lg:w-[30px] lg:h-[30px] md:w-[30px] md:h-[30px] w-[25px] h-[25px]"
              src={weatherlogo}
              alt="weather logo"
            />
            Weather App
          </h1>
        </div>
        <div className="flex gap-2 lg:w-[500px] w-auto">
          <input
            className="bg-white w-full py-1.5 px-3 border border-gray-300 focus:placeholder:text-indigo-800 focus:outline-none rounded-lg"
            type="text"
            placeholder="Enter city name"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            onKeyDown={handleKeyDown} 
          />
          <button
            onClick={handleSearch}
            className="lg:text-lg md:text-lg text-base cursor-pointer font-semibold bg-indigo-700 hover:bg-indigo-600 text-white px-5 rounded-lg"
          >
            Search
          </button>
        </div>
      </div>

      <WeatherBanner time={currentTime} day={currentDay} data={weatherData}/>
      <WeatherDetails data={weatherData} />
      <WeatherForecast />
      <Footer />
    </>
  );
}

export default App;
