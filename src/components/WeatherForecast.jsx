export default function WeatherForecast({ forecastData }) {
 
  if (!forecastData || !forecastData.list) {
    return (
      <div className="shadow2 px-7 py-7 bg-white rounded-lg mt-10 lg:mx-8 mx-5">
        <h1 className="text-lg font-semibold pl-1">5 Day's Forecast</h1>

        <section className="dots-container lg:mt-2 mt-10 mb-2">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </section>
      </div>
    );
  }

  function getCustomIcon(weatherCondition) {
    const iconMapping = {
      Clear: "https://cdn-icons-png.flaticon.com/128/8030/8030067.png",
      Clouds: "https://cdn-icons-png.flaticon.com/128/4814/4814293.png",
      Thunderstorm: "https://cdn-icons-png.flaticon.com/128/4724/4724103.png",
      Tornado: "https://cdn-icons-png.flaticon.com/128/8984/8984259.png",
      Rain: "https://cdn-icons-png.flaticon.com/128/4724/4724094.png",
      Drizzle: "https://cdn-icons-png.flaticon.com/128/1809/1809557.png",
      Snow: "https://cdn-icons-png.flaticon.com/128/13496/13496459.png",
      Mist: "https://cdn-icons-png.flaticon.com/128/17798/17798772.png",
      Haze: "https://cdn-icons-png.flaticon.com/128/17798/17798772.png",
      Fog: "https://cdn-icons-png.flaticon.com/128/3750/3750506.png",
      Smoke: "https://cdn-icons-png.flaticon.com/128/3750/3750506.png",
      Dust: "https://cdn-icons-png.flaticon.com/128/3750/3750506.png",
      Ash: "https://cdn-icons-png.flaticon.com/128/3750/3750506.png",
      Squall: "https://cdn-icons-png.flaticon.com/128/3750/3750506.png",
    };
    return (
      iconMapping[weatherCondition] ||
      "https://cdn-icons-png.flaticon.com/128/4814/4814489.png"
    );
  }

  return (
    <>
      <div className="shadow2 px-7 py-7 bg-white rounded-lg mt-10 lg:mx-8 mx-5">
        <h1 className="text-lg font-semibold pl-1">5 Day's Forecast</h1>

        <div className="mt-2">
          <div className="flex overflow-x-auto justify-start py-5 gap-4">
            
            {forecastData.list.map((data, idx) => {
              function formatTimeAMPM(dt_txt) {
                const timeString = dt_txt.split(" ")[1]; // "06:00:00"
                const parts = timeString.split(":"); // ["06", "00", "00"]
                let hours = parseInt(parts[0]);
                const minutes = parts[1];
                const ampm = hours >= 12 ? "PM" : "AM";
                hours = hours % 12;
                hours = hours ? hours : 12; // the hour '0' should be '12'
                return `${hours}:${minutes} ${ampm}`;
              }

              return (
                <div
                  key={idx}
                  className="bg-gray-50 flex flex-col gap-1 justify-center items-center rounded-lg py-3 min-w-[100px]"
                >
                  <p className="font-semibold text-center">{formatTimeAMPM(data.dt_txt)}</p>
                  <img
                    className="w-[40px]"
                    src={getCustomIcon(data.weather[0].main)}
                    alt="icon"
                  />
                  <p className="font-semibold">{Math.floor(data.main.temp)}°C</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
