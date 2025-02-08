import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-basic',
  imports: [CommonModule],
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.scss',
})
export class BasicComponent {
  availableLanguages: string[] = ['Java', 'Javascript'];
  selectedLanguage: string = 'Select Language';
  onselectedItem(lang: string) {
    this.selectedLanguage = lang;
  }
}
