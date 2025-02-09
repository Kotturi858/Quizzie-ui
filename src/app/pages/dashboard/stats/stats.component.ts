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
          position: 'left',
          labels: {
            usePointStyle: true,
            color: 'rgb(75, 192, 192)',
          },
        },
      },
      animation: {
        duration: 1500, // Animation duration in milliseconds (increase this value for longer animation)
        easing: 'easeOutBounce', // You can choose different easing effects here
      },
    };
  }

  options: any;
}
