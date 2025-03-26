
export default function WeatherForecast({ forecastData }) {
  // console.log(forecastData);

  return (
    <>
      <div className="shadow2 px-7 py-7 bg-white rounded-lg mt-10 lg:mx-8 mx-5">
        
        <h1 className="text-lg font-semibold pl-1">5 Day's Forecast</h1>

        <div className="mt-2">
          <div className="flex overflow-x-auto justify-start py-5 gap-4">
            {/* {forecastData.list.map((data, idx) => {
              
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
                <div key={idx} className="bg-gray-50 flex flex-col gap-1 justify-center items-center rounded-lg py-3 min-w-[100px]">
                  <p className="font-semibold text-center">
                    {formatTimeAMPM(data.dt_txt)}
                  </p>
                  <img
                    className="w-[40px]"
                    src="https://cdn-icons-png.flaticon.com/128/1146/1146869.png"
                    alt="icon"
                  />
                  <p className="font-semibold">
                    {Math.floor(data.main.temp)}°C
                  </p>
                </div>
              );
            })} */}
          </div>
        </div>
      
      </div>
    </>
  );
}
