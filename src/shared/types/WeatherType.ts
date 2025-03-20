export type WeatherType = {
  current: {
    temperature_2m: number;
    weather_code: number;
  };
  daily: {
    time: string[]; // Даты в формате YYYY-MM-DD
    temperature_2m_min: number[];
    temperature_2m_max: number[];
    weather_code: number[];
  };
};