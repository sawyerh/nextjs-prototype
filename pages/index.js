import React, { useEffect, useState } from "react";
import Head from "next/head";
import ForecastMessage from "../components/ForecastMessage";

const Home = () => {
  // This API endpoint could be different depending on the user:
  const apiEndpoint = "https://api.weather.gov/gridpoints/BOX/87,60/forecast";
  const [forecast, setForecast] = useState();

  useEffect(() => {
    // Get the forecast once this page has mounted:
    const getForecast = async () => {
      const res = await fetch(apiEndpoint);
      const body = await res.json();
      const forecast = body.properties.periods[0];

      setForecast(forecast);
    };

    getForecast();
  }, [apiEndpoint]);

  return (
    <main>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>API response:</h1>

      {forecast ? <ForecastMessage forecast={forecast} /> : "Loading..."}
    </main>
  );
};

export default Home;
