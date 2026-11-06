
import { Component, inject, computed } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'app-crop-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './crop-detail.html',
  styleUrl: './crop-detail.css'
})
export class CropDetail {

  private route = inject(ActivatedRoute);

  private cropId = toSignal(
    this.route.paramMap.pipe(
      map(params => params.get('id'))
    ),
    { initialValue: null }
  );

  cropName = computed(() => {
    const names: Record<string, string> = {
      rice: 'වී',
      chili: 'මිරිස්',
      tomato: 'තක්කාලි'
    };

    return names[this.cropId() ?? ''] ?? null;
  });

}
