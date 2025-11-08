import { formatTemperature, formatDate } from "../utils/formatters";

export default function WeatherCard({ weather }) {
  const { name, sys, main, weather: conditions, wind } = weather;
  const icon = conditions[0].icon;

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mt-6 w-80 text-center">
      <h2 className="text-2xl font-semibold text-gray-700">{name}, {sys.country}</h2>
      <p className="text-sm text-gray-500">{formatDate(new Date())}</p>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="weather icon"
        className="mx-auto my-3"
      />
      <p className="text-5xl font-bold text-indigo-600">{formatTemperature(main.temp)}</p>
      <p className="text-gray-600 mt-2 capitalize">{conditions[0].description}</p>
      <div className="flex justify-between text-sm text-gray-500 mt-4">
        <span>Humidity: {main.humidity}%</span>
        <span>Wind: {wind.speed} m/s</span>
      </div>
    </div>
  );
}
