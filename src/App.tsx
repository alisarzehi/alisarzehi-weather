import { useEffect, useState } from "react";
import Background from "./components/Background";
import InputLocation from "./components/InputLocation";
import Temperature from "./components/Temperature";
import { getCurrentWeather } from "./utils/axios";
import { WeatherData } from "./types/server";

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData>();
  useEffect(() => {
    async function weatherBirjand() {
      const information = await getCurrentWeather("birjand");
      setWeatherData(information);
    }
    weatherBirjand();
  }, []);
  const handleChangeLocation = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const information = await getCurrentWeather(e.target.value);
    setWeatherData(information);
  };
  return (
    <>
      {/* Hero section */}
      <section id="home">
        {/* bg separated from content so the filters don't affect it*/}
        <Background />
        {/* content */}
        <div className="relative z-10 p-0 h-screen bg-transparent">
          <div className="absolute h-2/3 w-screen bottom-0 backdrop-blur-md bg-black/25 sm:relative sm:flex sm:h-screen sm:w-2/5 sm:float-right justify-start">
            <InputLocation onCity={handleChangeLocation} />
          </div>
        </div>
        <Temperature name={weatherData?.name} temp={weatherData?.main.temp} />
        <div className="absolute top-10 left-10">
          <p className="font-extralight text-3xl text-white inline ms-4">
            Weather today
          </p>
        </div>
      </section>
    </>
  );
}

export default App;
