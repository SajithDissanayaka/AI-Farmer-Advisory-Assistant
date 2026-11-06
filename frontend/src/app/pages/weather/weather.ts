
import {
  Component,
  inject,
  signal,
  OnInit
} from '@angular/core';

import { Weather } from '../../services/weather';
import { WeatherData } from '../../models/weather.model';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [],
  templateUrl: './weather.html',
  styleUrl: './weather.css'
})
export class WeatherPage implements OnInit {

  private weatherService = inject(Weather);

  districts = this.weatherService.getDistricts();

  selectedDistrict = signal<string>('kandy');

  weatherData = signal<WeatherData | null>(null);

  isLoading = signal<boolean>(false);

  errorMessage = signal<string>('');

  ngOnInit(): void {
    void this.loadWeather();
  }

  async loadWeather(): Promise<void> {

    this.isLoading.set(true);
    this.errorMessage.set('');

    try {
      const data = await this.weatherService.getWeather(
        this.selectedDistrict()
      );

      this.weatherData.set(data);

    } catch (error) {

      console.error('Weather error:', error);

      this.weatherData.set(null);

      this.errorMessage.set(
        'කාලගුණ තොරතුරු ලබාගැනීමට නොහැකි වුණා.'
      );

    } finally {

      this.isLoading.set(false);

    }
  }

  onDistrictChange(value: string): void {
    this.selectedDistrict.set(value);
    void this.loadWeather();
  }
}
