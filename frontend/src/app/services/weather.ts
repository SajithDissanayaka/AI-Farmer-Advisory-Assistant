
import { Injectable } from '@angular/core';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class Weather {

  private readonly demoData: WeatherData[] = [
    {
      districtId: 'kandy',
      districtName: 'මහනුවර',
      temperature: 26,
      humidity: 78,
      rainfall: 4.2,
      windSpeed: 12,
      condition: 'අර්ධ වශයෙන් වළාකුළු සහිතයි',
      icon: '⛅',
      forecast: [
        {
          day: 'Day 1',
          condition: 'වළාකුළු',
          icon: '☁️',
          maxTemp: 27,
          minTemp: 21
        },
        {
          day: 'Day 2',
          condition: 'වැසි',
          icon: '🌧️',
          maxTemp: 25,
          minTemp: 20
        },
        {
          day: 'Day 3',
          condition: 'හිරු එළිය',
          icon: '☀️',
          maxTemp: 29,
          minTemp: 22
        }
      ]
    },
    {
      districtId: 'colombo',
      districtName: 'කොළඹ',
      temperature: 30,
      humidity: 74,
      rainfall: 1.5,
      windSpeed: 15,
      condition: 'අර්ධ වශයෙන් වළාකුළු සහිතයි',
      icon: '🌤️',
      forecast: [
        {
          day: 'Day 1',
          condition: 'හිරු එළිය',
          icon: '☀️',
          maxTemp: 31,
          minTemp: 25
        },
        {
          day: 'Day 2',
          condition: 'වළාකුළු',
          icon: '☁️',
          maxTemp: 30,
          minTemp: 25
        },
        {
          day: 'Day 3',
          condition: 'වැසි',
          icon: '🌧️',
          maxTemp: 29,
          minTemp: 24
        }
      ]
    },
    {
      districtId: 'anuradhapura',
      districtName: 'අනුරාධපුර',
      temperature: 32,
      humidity: 61,
      rainfall: 0.5,
      windSpeed: 10,
      condition: 'හිරු එළිය',
      icon: '☀️',
      forecast: [
        {
          day: 'Day 1',
          condition: 'හිරු එළිය',
          icon: '☀️',
          maxTemp: 33,
          minTemp: 24
        },
        {
          day: 'Day 2',
          condition: 'හිරු එළිය',
          icon: '☀️',
          maxTemp: 34,
          minTemp: 25
        },
        {
          day: 'Day 3',
          condition: 'වළාකුළු',
          icon: '☁️',
          maxTemp: 32,
          minTemp: 24
        }
      ]
    }
  ];

  getDistricts(): { id: string; name: string }[] {
    return this.demoData.map(item => ({
      id: item.districtId,
      name: item.districtName
    }));
  }

  async getWeather(districtId: string): Promise<WeatherData> {
    const data = this.demoData.find(
      item => item.districtId === districtId
    );

    if (!data) {
      throw new Error('District not found');
    }

    return data;
  }
}
