import axios from "axios";

const API_KEY = process.env.REACT_APP_EXCHANGE_API_KEY;
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;

export const getUsdToLkrRate = async () => {
  try {
    const res = await axios.get(BASE_URL);
    return res.data.conversion_rates.LKR;
  } catch (error) {
    console.error("Failed to fetch exchange rate:", error);
    return null;
  }
};
