import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'app-login',
  imports: [ButtonModule, CommonModule, ReactiveFormsModule, FormsModule, ProgressBarModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  visibility = true;progressBarHeight = '10px'

  toggleVisibility(event: MouseEvent) {
    this.visibility = !this.visibility;
  }
}
