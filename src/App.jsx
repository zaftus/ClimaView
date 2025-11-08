import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import RecentSearches from "./components/RecentSearches";
import Loader from "./components/Loader";
import useWeather from "./hooks/useWeather";
import "./styles/index.css";

export default function App() {
  const [query, setQuery] = useState("");
  const { data, loading, error, fetchWeather } = useWeather();

  const handleSearch = async (city) => {
    setQuery(city);
    await fetchWeather(city);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-sky-200 to-indigo-200">
      <Header />
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <p className="text-red-600 mt-4">{error}</p>}
      {data && <WeatherCard weather={data} />}
      <RecentSearches onSelect={handleSearch} />
    </div>
  );
}
