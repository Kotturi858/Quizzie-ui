import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProgressBarModule } from 'primeng/progressbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    ButtonModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ProgressBarModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  visibility = true;
  constructor(private readonly router: Router) {}

  toggleVisibility() {
    this.visibility = !this.visibility;
  }

  register() {
    this.router.navigate(['/register']);
  }

  onLogin(){
    this.router.navigate(['/dashboard']);
  }
}
