export const getCandles = async () => {
  const response = await fetch("http://localhost:8081/candles");
  const data = await response.json();
  return data;
};
