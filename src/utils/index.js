const PRESSURE_UNITS = 0.750062;

export const getPressureMm = (hPa) => {
  return Math.round(hPa * PRESSURE_UNITS);
};

export const getTime = (s) => {
  return new Date(s * 1000).toLocaleTimeString("ru-RU", {
    timeZone: "Atlantic/Reykjavik",
  });
};
