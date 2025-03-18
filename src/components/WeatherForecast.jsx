import { useState } from "react";

export default function WeatherForecast() {
  
  const [activeTab, setActiveTab] = useState("today");

  return (
    <>
      <div className="shadow2 px-7 py-5 bg-white rounded-lg mt-10 lg:mx-8 mx-5">
        
        {/* Tab buttons */}
        <div className="flex items-center justify-start gap-6">
          <button
            className={`cursor-pointer lg:text-lg ms:text-lg text-base font-semibold py-1.5 px-1 ${
              activeTab === "today" ? "border-b-2 border-blue-500" : ""
            }`}
            onClick={() => setActiveTab("today")}
          >
            Today's Forecast
          </button>
          <p className="lg:text-xl md:text-xl text-3xl text-gray-300">|</p>
          <button
            className={`cursor-pointer lg:text-lg ms:text-lg text-base font-semibold py-1.5 px-1 ${
              activeTab === "tomorrow" ? "border-b-2 border-blue-500" : ""
            }`}
            onClick={() => setActiveTab("tomorrow")}
          >
            Tomorrow's Forecast
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-5">
          {activeTab === "today" && (
            <div>
              <div className="mt-1 flex overflow-x-auto justify-start py-5 gap-4">
                <div className="bg-gray-50 flex flex-col gap-1 justify-center items-center rounded-lg py-3 min-w-[100px]">
                  <p className="font-semibold">08:00</p>
                  <img
                    className="w-[40px]"
                    src="https://cdn-icons-png.flaticon.com/128/1146/1146869.png"
                    alt=""
                  />
                  <p className="font-semibold">22°C</p>
                </div>

                <div className="bg-gray-50 flex flex-col gap-1 justify-center items-center rounded-lg py-3 min-w-[100px]">
                  <p className="font-semibold">08:00</p>
                  <img
                    className="w-[40px]"
                    src="https://cdn-icons-png.flaticon.com/128/1146/1146869.png"
                    alt=""
                  />
                  <p className="font-semibold">22°C</p>
                </div>

                <div className="bg-gray-50 flex flex-col gap-1 justify-center items-center rounded-lg py-3 min-w-[100px]">
                  <p className="font-semibold">08:00</p>
                  <img
                    className="w-[40px]"
                    src="https://cdn-icons-png.flaticon.com/128/1146/1146869.png"
                    alt=""
                  />
                  <p className="font-semibold">22°C</p>
                </div>

                <div className="bg-gray-50 flex flex-col gap-1 justify-center items-center rounded-lg py-3 min-w-[100px]">
                  <p className="font-semibold">08:00</p>
                  <img
                    className="w-[40px]"
                    src="https://cdn-icons-png.flaticon.com/128/1146/1146869.png"
                    alt=""
                  />
                  <p className="font-semibold">22°C</p>
                </div>

                <div className="bg-gray-50 flex flex-col gap-1 justify-center items-center rounded-lg py-3 min-w-[100px]">
                  <p className="font-semibold">08:00</p>
                  <img
                    className="w-[40px]"
                    src="https://cdn-icons-png.flaticon.com/128/1146/1146869.png"
                    alt=""
                  />
                  <p className="font-semibold">22°C</p>
                </div>

                <div className="bg-gray-50 flex flex-col gap-1 justify-center items-center rounded-lg py-3 min-w-[100px]">
                  <p className="font-semibold">08:00</p>
                  <img
                    className="w-[40px]"
                    src="https://cdn-icons-png.flaticon.com/128/1146/1146869.png"
                    alt=""
                  />
                  <p className="font-semibold">22°C</p>
                </div>

                <div className="bg-gray-50 flex flex-col gap-1 justify-center items-center rounded-lg py-3 min-w-[100px]">
                  <p className="font-semibold">08:00</p>
                  <img
                    className="w-[40px]"
                    src="https://cdn-icons-png.flaticon.com/128/1146/1146869.png"
                    alt=""
                  />
                  <p className="font-semibold">22°C</p>
                </div>

                <div className="bg-gray-50 flex flex-col gap-1 justify-center items-center rounded-lg py-3 min-w-[100px]">
                  <p className="font-semibold">08:00</p>
                  <img
                    className="w-[40px]"
                    src="https://cdn-icons-png.flaticon.com/128/1146/1146869.png"
                    alt=""
                  />
                  <p className="font-semibold">22°C</p>
                </div>

                <div className="bg-gray-50 flex flex-col gap-1 justify-center items-center rounded-lg py-3 min-w-[100px]">
                  <p className="font-semibold">08:00</p>
                  <img
                    className="w-[40px]"
                    src="https://cdn-icons-png.flaticon.com/128/1146/1146869.png"
                    alt=""
                  />
                  <p className="font-semibold">22°C</p>
                </div>

                <div className="bg-gray-50 flex flex-col gap-1 justify-center items-center rounded-lg py-3 min-w-[100px]">
                  <p className="font-semibold">08:00</p>
                  <img
                    className="w-[40px]"
                    src="https://cdn-icons-png.flaticon.com/128/1146/1146869.png"
                    alt=""
                  />
                  <p className="font-semibold">22°C</p>
                </div>

                <div className="bg-gray-50 flex flex-col gap-1 justify-center items-center rounded-lg py-3 min-w-[100px]">
                  <p className="font-semibold">08:00</p>
                  <img
                    className="w-[40px]"
                    src="https://cdn-icons-png.flaticon.com/128/1146/1146869.png"
                    alt=""
                  />
                  <p className="font-semibold">22°C</p>
                </div>
              </div>
            </div>
          )}
          {activeTab === "tomorrow" && (
            <div>
              <div className="mt-1 flex overflow-x-auto justify-start py-5 gap-4">
                <div className="bg-gray-50 flex flex-col gap-1 justify-center items-center rounded-lg py-3 min-w-[100px]">
                  <p className="font-semibold">08:00</p>
                  <img
                    className="w-[40px]"
                    src="https://cdn-icons-png.flaticon.com/128/1146/1146869.png"
                    alt=""
                  />
                  <p className="font-semibold">23°C</p>
                </div>

                <div className="bg-gray-50 flex flex-col gap-1 justify-center items-center rounded-lg py-3 min-w-[100px]">
                  <p className="font-semibold">08:00</p>
                  <img
                    className="w-[40px]"
                    src="https://cdn-icons-png.flaticon.com/128/1146/1146869.png"
                    alt=""
                  />
                  <p className="font-semibold">23°C</p>
                </div>

                <div className="bg-gray-50 flex flex-col gap-1 justify-center items-center rounded-lg py-3 min-w-[100px]">
                  <p className="font-semibold">08:00</p>
                  <img
                    className="w-[40px]"
                    src="https://cdn-icons-png.flaticon.com/128/1146/1146869.png"
                    alt=""
                  />
                  <p className="font-semibold">23°C</p>
                </div>

                <div className="bg-gray-50 flex flex-col gap-1 justify-center items-center rounded-lg py-3 min-w-[100px]">
                  <p className="font-semibold">08:00</p>
                  <img
                    className="w-[40px]"
                    src="https://cdn-icons-png.flaticon.com/128/1146/1146869.png"
                    alt=""
                  />
                  <p className="font-semibold">23°C</p>
                </div>

                <div className="bg-gray-50 flex flex-col gap-1 justify-center items-center rounded-lg py-3 min-w-[100px]">
                  <p className="font-semibold">08:00</p>
                  <img
                    className="w-[40px]"
                    src="https://cdn-icons-png.flaticon.com/128/1146/1146869.png"
                    alt=""
                  />
                  <p className="font-semibold">23°C</p>
                </div>

                <div className="bg-gray-50 flex flex-col gap-1 justify-center items-center rounded-lg py-3 min-w-[100px]">
                  <p className="font-semibold">08:00</p>
                  <img
                    className="w-[40px]"
                    src="https://cdn-icons-png.flaticon.com/128/1146/1146869.png"
                    alt=""
                  />
                  <p className="font-semibold">23°C</p>
                </div>

                <div className="bg-gray-50 flex flex-col gap-1 justify-center items-center rounded-lg py-3 min-w-[100px]">
                  <p className="font-semibold">08:00</p>
                  <img
                    className="w-[40px]"
                    src="https://cdn-icons-png.flaticon.com/128/1146/1146869.png"
                    alt=""
                  />
                  <p className="font-semibold">23°C</p>
                </div>

                <div className="bg-gray-50 flex flex-col gap-1 justify-center items-center rounded-lg py-3 min-w-[100px]">
                  <p className="font-semibold">08:00</p>
                  <img
                    className="w-[40px]"
                    src="https://cdn-icons-png.flaticon.com/128/1146/1146869.png"
                    alt=""
                  />
                  <p className="font-semibold">23°C</p>
                </div>

                <div className="bg-gray-50 flex flex-col gap-1 justify-center items-center rounded-lg py-3 min-w-[100px]">
                  <p className="font-semibold">08:00</p>
                  <img
                    className="w-[40px]"
                    src="https://cdn-icons-png.flaticon.com/128/1146/1146869.png"
                    alt=""
                  />
                  <p className="font-semibold">23°C</p>
                </div>

                <div className="bg-gray-50 flex flex-col gap-1 justify-center items-center rounded-lg py-3 min-w-[100px]">
                  <p className="font-semibold">08:00</p>
                  <img
                    className="w-[40px]"
                    src="https://cdn-icons-png.flaticon.com/128/1146/1146869.png"
                    alt=""
                  />
                  <p className="font-semibold">23°C</p>
                </div>

                <div className="bg-gray-50 flex flex-col gap-1 justify-center items-center rounded-lg py-3 min-w-[100px]">
                  <p className="font-semibold">08:00</p>
                  <img
                    className="w-[40px]"
                    src="https://cdn-icons-png.flaticon.com/128/1146/1146869.png"
                    alt=""
                  />
                  <p className="font-semibold">23°C</p>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </>
  );
}
