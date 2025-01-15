import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { ThemeService } from '../../shared/services/theme.service';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  availableLanguages: string[] = ['Java', 'Javascript'];
  selectedLanguage: string = 'Select Language';
  activateGraph = true;
  theme = inject(ThemeService);

  constructor() {
    effect(() => {
      console.log('The current count is:', this.theme.isDarkMode());
      this.toggleDarkMode();
    });
  }

  toggleDarkMode() { }

  onselectedItem(lang: string) {
    this.selectedLanguage = lang;
  }

}
