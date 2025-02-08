import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { ThemeService } from '../../shared/services/theme.service';
import { BasicComponent } from './basic/basic.component';
import { StatsComponent } from './stats/stats.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { BadgesComponent } from './badges/badges.component';
// import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    BasicComponent,
    StatsComponent,
    LeaderboardComponent,
    BadgesComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  availableLanguages: string[] = ['Java', 'Javascript'];
  selectedLanguage: string = 'Select Language';
  // activateGraph = true;
  theme = inject(ThemeService);

  constructor() {
    effect(() => {
      console.log('The current count is:', this.theme.isDarkMode());
      // this.toggleDarkMode();
    });
  }

  onselectedItem(lang: string) {
    this.selectedLanguage = lang;
  }
}
