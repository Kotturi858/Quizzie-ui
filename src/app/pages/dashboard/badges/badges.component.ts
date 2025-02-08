import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badges',
  imports: [],
  templateUrl: './badges.component.html',
  styleUrl: './badges.component.scss',
})
export class BadgesComponent implements OnInit {
  ngOnInit(): void {
    this.badges = [
      'school',
      'stars',
      'trophy',
      'rewarded_ads',
      'timer_3',
      'counter_7',
      'timer_10',
      'taunt',
      'mountain_flag',
      'timer_5_shutter',
    ];
  }
  badges!: string[];
}
