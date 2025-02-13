import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-basic',
  imports: [CommonModule],
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.scss',
})
export class BasicComponent {
  availableLanguages: string[] = ['Java', 'Javascript'];
  selectedLanguage: string = 'Select Language';
  score: number = 0;

  constructor(private readonly router : Router){}
  onselectedItem(lang: string) {
    this.selectedLanguage = lang;
  }

  toInstructions() {
    this.router.navigate(['/instructions'], { queryParams: { language: this.selectedLanguage } })
  }
}
