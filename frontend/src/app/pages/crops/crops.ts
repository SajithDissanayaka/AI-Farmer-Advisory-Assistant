
import { Component, computed, signal } from '@angular/core';

import { Crop } from '../../models/crop.model';
import { CropCard } from '../../components/crop-card/crop-card';

@Component({
  selector: 'app-crops',
  standalone: true,
  imports: [CropCard],
  templateUrl: './crops.html',
  styleUrl: './crops.css'
})
export class Crops {

  searchTerm = signal('');

  crops = signal<Crop[]>([
    {
      id: 'rice',
      nameSi: 'වී',
      nameEn: 'Rice',
      emoji: '🌾',
      description: 'වී වගාව පිළිබඳ මූලික මාර්ගෝපදේශ.'
    },
    {
      id: 'chili',
      nameSi: 'මිරිස්',
      nameEn: 'Chili',
      emoji: '🌶️',
      description: 'මිරිස් වගාව පිළිබඳ මූලික මාර්ගෝපදේශ.'
    },
    {
      id: 'tomato',
      nameSi: 'තක්කාලි',
      nameEn: 'Tomato',
      emoji: '🍅',
      description: 'තක්කාලි වගාව පිළිබඳ මූලික මාර්ගෝපදේශ.'
    }
  ]);

  filteredCrops = computed(() => {

    const search = this.searchTerm()
      .trim()
      .toLowerCase();

    if (!search) {
      return this.crops();
    }

    return this.crops().filter(crop =>
      crop.nameSi.includes(search) ||
      crop.nameEn.toLowerCase().includes(search)
    );

  });

  updateSearch(value: string): void {
    this.searchTerm.set(value);
  }
}
