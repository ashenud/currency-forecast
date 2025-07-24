import React, { useEffect, useState } from "react";
import ForecastCard from "./components/ForecastCard";
import { forecastData } from "./data/forecast";
import { getUsdToLkrRate } from "./services/exchangeRateApi";

function App() {
  const [liveRate, setLiveRate] = useState(null);

  useEffect(() => {
    getUsdToLkrRate().then((rate) => {
      if (rate) setLiveRate(rate);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-6 px-4">
      <h1 className="text-3xl font-bold mb-4 text-center">USD to LKR Forecast</h1>
      <div className="mb-6">
        <p className="text-xl text-gray-700">
          Live Rate:{" "}
          <span className="text-blue-600 font-semibold text-2xl">
            {liveRate ? `LKR ${liveRate.toFixed(2)}` : "Loading..."}
          </span>
        </p>
        <p className="text-sm text-gray-500 text-center mt-1">Real-time rate from ExchangeRate-API</p>
      </div>
      <div className="flex flex-wrap justify-center max-w-6xl">
        {forecastData.map((item, index) => (
          <ForecastCard key={index} {...item} />
        ))}
      </div>
      <p className="text-xs text-gray-500 mt-6 text-center">
        Forecast data based on public models as of July 2025.
      </p>
    </div>
  );
}

export default App;
