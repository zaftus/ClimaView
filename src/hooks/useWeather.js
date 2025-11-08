import { useState } from "react";
import { API_KEY } from "../config";

export default function useWeather() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchWeather(city) {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      const result = await response.json();

      if (result.cod !== 200) throw new Error(result.message);

      setData(result);

      // Save city to recent searches
      const recent = JSON.parse(localStorage.getItem("recentSearches")) || [];
      const updated = [city, ...recent.filter(c => c !== city)].slice(0, 5);
      localStorage.setItem("recentSearches", JSON.stringify(updated));

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return { data, loading, error, fetchWeather };
}
