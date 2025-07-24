import React from "react";

const ForecastCard = ({ duration, rate, change }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 m-2">
      <h3 className="text-lg font-bold">{duration}</h3>
      <p className="text-2xl text-blue-600">LKR {rate.toFixed(2)}</p>
      <p className={`text-sm ${change >= 0 ? "text-green-600" : "text-red-600"}`}>
        {change >= 0 ? "+" : ""}
        {change}% change
      </p>
    </div>
  );
};

export default ForecastCard;
