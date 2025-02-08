import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-stats',
  imports: [ChartModule],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss',
})
export class StatsComponent {
  data1: any;
  data2: any;
  constructor() {
    this.data1 = {
      labels: ['January', 'February', 'March'],
      datasets: [
        {
          label: 'My Dataset 1',
          data: [65, 59, 80],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        },
      ],
    };

    // Chart 2 data
    this.data2 = {
      labels: ['May', 'June', 'July'],
      datasets: [
        {
          label: 'My Dataset 2',
          data: [55, 65, 75],
          fill: false,
          borderColor: 'rgb(153, 102, 255)',
          tension: 0.1,
        },
      ],
    };
    this.options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'left', // Shared legend position
          labels: {
            usePointStyle: true, // Use point style for legend items
          },
        },
      },
    };
  }

  options: any;
}
