import axios from "axios";

const URL = "https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
  baseURL: URL,
});

export const formatPrice = (price) => {
  const dollarAmount = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(((price / 100) * 80).toFixed(0));
  return dollarAmount;
};
