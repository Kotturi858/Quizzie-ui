import { Component, effect, inject } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../../shared/services/theme.service';

@Component({
  selector: 'app-leaderboard',
  imports: [TableModule, ButtonModule, CommonModule],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.scss',
})
export class LeaderboardComponent {
  theme = inject(ThemeService);
  ScoreData: any = [
    { Ranking: 1, name: 'bhaarth', score: 200 },
    { Ranking: 2, name: 'kirre', score: 200 },
    { Ranking: 3, name: 'kurre', score: 200 },
    { Ranking: 1, name: 'bhaarth', score: 200 },
    { Ranking: 2, name: 'kirre', score: 200 },
    { Ranking: 3, name: 'kurre', score: 200 },
    { Ranking: 1, name: 'bhaarth', score: 200 },
    { Ranking: 2, name: 'kirre', score: 200 },
    { Ranking: 3, name: 'kurre', score: 200 },
    { Ranking: 1, name: 'bhaarth', score: 200 },
    { Ranking: 2, name: 'kirre', score: 200 },
    { Ranking: 3, name: 'kurre', score: 200 },
    { Ranking: 1, name: 'bhaarth', score: 200 },
    { Ranking: 2, name: 'kirre', score: 200 },
    { Ranking: 3, name: 'kurre', score: 200 },
    { Ranking: 1, name: 'bhaarth', score: 200 },
    { Ranking: 2, name: 'kirre', score: 200 },
    { Ranking: 3, name: 'kurre', score: 200 },
  ];

  themeStyle = {
    'background-color': 'rgb(43 48 53)',
    color: 'white',
  };

  constructor() {
    effect(() => {
      this.themeStyle = {
        'background-color':
          this.theme.isDarkMode() === 'dark' ? 'rgb(43 48 53)' : 'white',
        color: this.theme.isDarkMode() === 'dark' ? 'white' : 'black',
      };
    });
  }
}
