export default function WeatherBanner({time, day, data}) {
  return (
    <>
      <div className="bgImage shadow flex lg:flex-row md:flex-row flex-col lg:justify-between md:justify-between justify-center lg:items-end md:items-end items-center h-[400px] mt-5 lg:mx-8 mx-5">
        <div className="lg:ml-10 md:ml-10 ml-0 mb-10">
          <h1 className="lg:text-8xl md:text-8xl text-6xl text-white mb-1">
            {Math.floor(data.main.temp)}°C
          </h1>
          <p className="text-xl text-white lg:pl-1 md:pl-1 pl-0.5">{data.name}, {data.sys.country}</p>
        </div>

        <div className="lg:mr-10 md:mr-10 mr-0 lg:mb-10 md:mb-10 mb-0">
          <h1 className="lg:text-5xl md:text-5xl text-4xl text-white mb-1">
            {time}
          </h1>
          <p className="text-xl text-white lg:pl-2 pl-2">{day}</p>
        </div>
      </div>
    </>
  );
}
