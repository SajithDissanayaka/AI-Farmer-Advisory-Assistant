
import {
  Component,
  computed,
  inject,
  signal,
  OnInit
} from '@angular/core';

import { Crop } from '../../models/crop.model';
import { CropCard } from '../../components/crop-card/crop-card';
import { CropApi } from '../../services/crop-api';

@Component({
  selector: 'app-crops',
  standalone: true,
  imports: [CropCard],
  templateUrl: './crops.html',
  styleUrl: './crops.css'
})
export class Crops implements OnInit {

  private cropApi = inject(CropApi);

  searchTerm = signal('');

  crops = signal<Crop[]>([]);

  isLoading = signal(false);

  errorMessage = signal('');

  filteredCrops = computed(() => {
    const search = this.searchTerm()
      .trim()
      .toLowerCase();

    return this.crops().filter(crop =>
      crop.nameSi.includes(search) ||
      crop.nameEn.toLowerCase().includes(search)
    );
  });

  ngOnInit(): void {
    this.loadCrops();
  }

  loadCrops(): void {

    this.isLoading.set(true);
    this.errorMessage.set('');

    this.cropApi.getAllCrops().subscribe({

      next: response => {
        this.crops.set(response.crops);
        this.isLoading.set(false);
      },

      error: error => {
        console.error('Crop API Error:', error);

        this.crops.set([]);

        this.errorMessage.set(
          'බෝග තොරතුරු ලබාගැනීමට නොහැකි වුණා.'
        );

        this.isLoading.set(false);
      }

    });
  }

  updateSearch(value: string): void {
    this.searchTerm.set(value);
  }
}
