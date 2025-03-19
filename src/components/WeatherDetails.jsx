export default function WeatherDetails() {
  return (
    <>
      <div className="shadow2 px-7 py-5 bg-white rounded-lg mt-10 lg:mx-8 mx-5">
        <h1 className="lg:text-lg ms:text-lg text-base font-semibold">
          Weather Details
        </h1>

        <div className="flex flex-wrap lg:flex-row flex-col gap-5 mt-6">
          
         <div className="bg-gray-50 flex items-center justify-between gap-1 px-5 py-4 rounded-xl min-w-[260px]">
            <div>
              <p className="font-semibold text-gray-600 mb-1">Feels like</p>
              <p className="font-semibold text-2xl">12:00</p>
            </div>
            <div>
              <img
                className="w-[40px]"
                src="https://cdn-icons-png.flaticon.com/128/1146/1146869.png"
                alt=""
              />
            </div>
          </div>

          <div className="bg-gray-50 flex items-center justify-between gap-1 px-5 py-4 rounded-xl min-w-[260px]">
            <div>
              <p className="font-semibold text-gray-600 mb-1">Sunrise</p>
              <p className="font-semibold text-2xl">12:00</p>
            </div>
            <div>
              <img
                className="w-[40px]"
                src="https://cdn-icons-png.flaticon.com/128/1146/1146869.png"
                alt=""
              />
            </div>
          </div>

          <div className="bg-gray-50 flex items-center justify-between gap-1 px-5 py-4 rounded-xl min-w-[260px]">
            <div>
              <p className="font-semibold text-gray-600 mb-1">Sunset</p>
              <p className="font-semibold text-2xl">12:00</p>
            </div>
            <div>
              <img
                className="w-[40px]"
                src="https://cdn-icons-png.flaticon.com/128/1146/1146869.png"
                alt=""
              />
            </div>
          </div>

          <div className="bg-gray-50 flex items-center justify-between gap-1 px-5 py-4 rounded-xl min-w-[260px]">
            <div>
              <p className="font-semibold text-gray-600 mb-1">Chance of rain</p>
              <p className="font-semibold text-2xl">12:00</p>
            </div>
            <div>
              <img
                className="w-[40px]"
                src="https://cdn-icons-png.flaticon.com/128/1146/1146869.png"
                alt=""
              />
            </div>
          </div>

          <div className="bg-gray-50 flex items-center justify-between gap-1 px-5 py-4 rounded-xl min-w-[260px]">
            <div>
              <p className="font-semibold text-gray-600 mb-1">Visiblity</p>
              <p className="font-semibold text-2xl">12:00</p>
            </div>
            <div>
              <img
                className="w-[40px]"
                src="https://cdn-icons-png.flaticon.com/128/1146/1146869.png"
                alt=""
              />
            </div>
          </div>

          <div className="bg-gray-50 flex items-center justify-between gap-1 px-5 py-4 rounded-xl min-w-[260px]">
            <div>
              <p className="font-semibold text-gray-600 mb-1">Wind</p>
              <p className="font-semibold text-2xl">12:00</p>
            </div>
            <div>
              <img
                className="w-[40px]"
                src="https://cdn-icons-png.flaticon.com/128/1146/1146869.png"
                alt=""
              />
            </div>
          </div>

          <div className="bg-gray-50 flex items-center justify-between gap-1 px-5 py-4 rounded-xl min-w-[260px]">
            <div>
              <p className="font-semibold text-gray-600 mb-1">Sea Level</p>
              <p className="font-semibold text-2xl">12:00</p>
            </div>
            <div>
              <img
                className="w-[40px]"
                src="https://cdn-icons-png.flaticon.com/128/1146/1146869.png"
                alt=""
              />
            </div>
          </div>

          <div className="bg-gray-50 flex items-center justify-between gap-1 px-5 py-4 rounded-xl min-w-[260px]">
            <div>
              <p className="font-semibold text-gray-600 mb-1">Pressure</p>
              <p className="font-semibold text-2xl">12:00</p>
            </div>
            <div>
              <img
                className="w-[40px]"
                src="https://cdn-icons-png.flaticon.com/128/1146/1146869.png"
                alt=""
              />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
