
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Crop } from '../../models/crop.model';

@Component({
  selector: 'app-crop-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './crop-card.html',
  styleUrl: './crop-card.css'
})
export class CropCard {

  crop = input.required<Crop>();

}
