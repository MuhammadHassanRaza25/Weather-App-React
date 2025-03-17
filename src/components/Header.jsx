import weatherlogo from "../assets/images/weatherlogo.png";

export default function Header() {
  return (
    <>
      <div className="flex justify-between lg:flex-row lg:gap-0 gap-4 flex-col py-5 lg:px-10 px-5">
        <div>
          <h1 className="flex items-end lg:p-0 p-2 lg:pl-0 pl-3 lg:rounded-none rounded-lg gap-1.5 text-indigo-800 lg:text-2xl md:text-2xl text-xl font-bold">
            <img className="lg:w-[30px] lg:h-[30px] md:w-[30px] md:h-[30px] w-[25px] h-[25px]" src={weatherlogo} alt="weather logo"/>
             Weather App
          </h1>
        </div>
        <div className="flex gap-2 lg:w-[500px] w-auto">
          <input className="bg-white w-full py-1.5 px-3 border border-gray-300 focus:placeholder:text-indigo-800 focus:outline-none rounded-lg" type="text" placeholder="Enter city name"/>
          <button className="lg:text-lg md:text-lg text-base cursor-pointer font-semibold bg-indigo-700 hover:bg-indigo-600 text-white px-5 rounded-lg">Search</button>
        </div>
      </div>
    </>
  );
}
