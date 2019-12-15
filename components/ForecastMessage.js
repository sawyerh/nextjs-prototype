import React from "react";

function icon(shortForecast) {
  if (shortForecast === "Mostly Sunny") return "🌤";
  if (shortForecast.match(/Rain/i)) return "☔️";
  if (shortForecast.match(/Snow/i)) return "❄️";
  return "🌥";
}

const ForecastMessage = ({ forecast }) => (
  <React.Fragment>
    <h2>
      {icon(forecast.shortForecast)} {forecast.shortForecast}
    </h2>
    <p>{forecast.detailedForecast}</p>
  </React.Fragment>
);

export default ForecastMessage;
