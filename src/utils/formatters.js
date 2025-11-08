export const formatTemperature = (temp) => `${Math.round(temp)}°C`;

export const formatDate = (date) =>
  date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });
