
import { Component, inject, signal } from '@angular/core';
import { Api } from './services/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private api = inject(Api);

  message = signal<string>('');
  loading = signal<boolean>(false);

  showMessage(): void {
    console.log('Button clicked');

    this.loading.set(true);
    this.message.set('');

    this.api.getHealth().subscribe({
      next: (response) => {
        console.log('API success:', response);

        this.message.set(response.message);
        this.loading.set(false);
      },

      error: (error) => {
        console.error('API failed:', error);

        this.message.set('Backend connection failed');
        this.loading.set(false);
      }
    });
  }
}
