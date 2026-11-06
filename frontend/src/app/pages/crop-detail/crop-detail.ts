
import {
  Component,
  inject,
  signal
} from '@angular/core';

import {
  ActivatedRoute,
  RouterLink
} from '@angular/router';

import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap, map, of, catchError, startWith } from 'rxjs';

import { Crop } from '../../models/crop.model';
import { CropApi } from '../../services/crop-api';

type CropDetailState =
  | { status: 'loading' }
  | { status: 'success'; crop: Crop }
  | { status: 'error'; message: string };

@Component({
  selector: 'app-crop-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './crop-detail.html',
  styleUrl: './crop-detail.css'
})
export class CropDetail {

  private route = inject(ActivatedRoute);
  private cropApi = inject(CropApi);

  state = toSignal(
    this.route.paramMap.pipe(
      map(params => params.get('id')),

      switchMap(id => {
        if (!id) {
          return of<CropDetailState>({
            status: 'error',
            message: 'බෝග ID එක හමු නොවීය.'
          });
        }

        return this.cropApi.getCropById(id).pipe(
          map(crop => ({
            status: 'success' as const,
            crop
          })),

          startWith({
            status: 'loading' as const
          }),

          catchError(error => of<CropDetailState>({
            status: 'error',
            message: error.status === 404
              ? 'බෝගය හමු නොවීය.'
              : 'බෝග තොරතුරු ලබාගැනීමට නොහැකි වුණා.'
          }))
        );
      })
    ),
    { initialValue: { status: 'loading' } as CropDetailState }
  );
}
