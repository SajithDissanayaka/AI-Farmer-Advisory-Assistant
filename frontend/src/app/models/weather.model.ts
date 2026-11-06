
export interface ForecastDay {
  day: string;
  condition: string;
  icon: string;
  maxTemp: number;
  minTemp: number;
}

export interface WeatherData {
  districtId: string;
  districtName: string;

  temperature: number;
  humidity: number;
  rainfall: number;
  windSpeed: number;

  condition: string;
  icon: string;

  forecast: ForecastDay[];
}
