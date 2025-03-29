export default function WeatherDetails({data, sunset, sunrise}) {

  if (!data|| !sunset || !sunrise) {
    return(
      <div className="shadow2 px-7 py-7 bg-white rounded-lg mt-10 lg:mx-8 mx-5">
        <h1 className="text-lg font-semibold pl-1">Weather Details</h1>

        <section className="dots-container lg:mt-2 mt-10 mb-2">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </section>
      </div>
  )
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
      <div className="shadow2 px-7 py-5 bg-white rounded-lg mt-10 lg:mx-8 mx-5">
        <h1 className="text-lg font-semibold pl-1">Weather Details</h1>

        <div className="flex flex-wrap lg:flex-row flex-col gap-5 mt-6">
          
         <div className="bg-gray-50 flex items-center justify-between gap-1 px-5 py-4 rounded-xl min-w-[260px]">
            <div>
              <p className="font-semibold text-gray-600 mb-1">Feels like</p>
              <p className="font-semibold text-2xl">{data.main.feels_like ? Math.floor(data.main.feels_like)+"°C": "-"}</p>
            </div>
            <div>
              {
                Math.floor(data.main.feels_like) <= 25
                ?(
                  <img
                    className="w-[40px]"
                    src="https://cdn-icons-png.flaticon.com/128/2322/2322701.png"
                    alt="icon"
                  />   
                )
                :(
                  <img
                    className="w-[40px]"
                    src="https://cdn-icons-png.flaticon.com/128/6218/6218295.png"
                    alt="icon"
                  /> 
                ) 
              }
            </div>
          </div>

          <div className="bg-gray-50 flex items-center justify-between gap-1 px-5 py-4 rounded-xl min-w-[260px]">
            <div>
              <p className="font-semibold text-gray-600 mb-1">Sunrise</p>
              <p className="font-semibold text-2xl">{sunrise? sunrise: "-"}</p>
            </div>
            <div>
              <img
                className="w-[40px]"
                src="https://cdn-icons-png.flaticon.com/128/8098/8098355.png"
                alt="icon"
              />
            </div>
          </div>

          <div className="bg-gray-50 flex items-center justify-between gap-1 px-5 py-4 rounded-xl min-w-[260px]">
            <div>
              <p className="font-semibold text-gray-600 mb-1">Sunset</p>
              <p className="font-semibold text-2xl">{sunset? sunset: "-"}</p>
            </div>
            <div>
              <img
                className="w-[40px]"
                src="https://cdn-icons-png.flaticon.com/128/8098/8098358.png"
                alt="icon"
              />
            </div>
          </div>

          <div className="bg-gray-50 flex items-center justify-between gap-1 px-5 py-4 rounded-xl min-w-[260px]">
            <div>
              <p className="font-semibold text-gray-600 mb-1">Humidity</p>
              <p className="font-semibold text-2xl">{data.main.humidity ? data.main.humidity : "-"}%</p>
            </div>
            <div>
              <img
                className="w-[40px]"
                src="https://cdn-icons-png.flaticon.com/128/11742/11742610.png"
                alt="icon"
              />
            </div>
          </div>

          <div className="bg-gray-50 flex items-center justify-between gap-1 px-5 py-4 rounded-xl min-w-[260px]">
            <div>
              <p className="font-semibold text-gray-600 mb-1">Visiblity</p>
              <p className="font-semibold text-2xl">{data.visibility ? data.visibility/1000 : "-"} km</p>
            </div>
            <div>
              <img
                className="w-[40px]"
                src="https://cdn-icons-png.flaticon.com/128/2698/2698213.png"
                alt="icon"
              />
            </div>
          </div>

          <div className="bg-gray-50 flex items-center justify-between gap-1 px-5 py-4 rounded-xl min-w-[260px]">
            <div>
              <p className="font-semibold text-gray-600 mb-1">Wind</p>
              <p className="font-semibold text-2xl">{data.wind.speed ? data.wind.speed+" "+"km/h": "-"}</p>
            </div>
            <div>
              <img
                className="w-[40px]"
                src="https://cdn-icons-png.flaticon.com/128/2529/2529971.png"
                alt="icon"
              />
            </div>
          </div>

          <div className="bg-gray-50 flex items-center justify-between gap-1 px-5 py-4 rounded-xl min-w-[260px]">
            <div>
              <p className="font-semibold text-gray-600 mb-1">Pressure</p>
              <p className="font-semibold text-2xl">{data.main.pressure ? data.main.pressure: "-"} hPa</p>
            </div>
            <div>
              <img
                className="w-[40px]"
                src="https://cdn-icons-png.flaticon.com/128/6975/6975183.png"
                alt="icon"
              />
            </div>
          </div>

          <div className="bg-gray-50 flex items-center justify-between gap-1 px-5 py-4 rounded-xl min-w-[260px]">
            <div>
              <p className="font-semibold text-gray-600 mb-1">Weather</p>
              <p className="font-semibold text-xl">{data.weather[0].description}</p>
            </div>
            <div>
              <img
                className="w-[40px]"
                src={getCustomIcon(data.weather[0].main)}
                alt="weather icon"
              />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
