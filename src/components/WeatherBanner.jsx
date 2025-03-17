export default function WeatherBanner() {
  return (
    <>
      <div className="bgImage shadow flex lg:flex-row md:flex-row flex-col lg:justify-between md:justify-between justify-center lg:items-end md:items-end items-center h-[400px] mt-5 lg:mx-8 mx-5">
        <div className="lg:ml-10 md:ml-10 ml-0 mb-10">
          <h1 className="lg:text-8xl md:text-8xl text-6xl text-white mb-1">
            25'C
          </h1>
          <p className="text-xl text-white">Karachi, Pakistan</p>
        </div>

        <div className="lg:mr-10 md:mr-10 mr-0 ml-5 lg:mb-10 md:mb-10 mb-0">
          <h1 className="lg:text-5xl md:text-5xl text-4xl text-white mb-1">
            7:52 AM
          </h1>
          <p className="text-xl text-white">Sunset Time, Sunday</p>
        </div>
      </div>
    </>
  );
}
