import axios from "axios";

const API_KEY = "cae0e5ab4b8e5de7ee850cc3bc527a7f";
const client = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

export async function getCurrentWeather(cityName: string) {
  const { data } = await client(`/weather?q=${cityName}&appid=${API_KEY}`);
  return data;
}
