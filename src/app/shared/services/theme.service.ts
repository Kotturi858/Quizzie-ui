import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDarkMode = signal<string>('dark');

  constructor() { }

  toggleTheme() {
    this.isDarkMode.update((item) => ['light', 'dark'][+(item === 'light')])
  }
}
