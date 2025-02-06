import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'app-register',
  imports: [
    ButtonModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ProgressBarModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  visibility = true;
  constructor(private readonly router: Router) {}

  toggleVisibility() {
    this.visibility = !this.visibility;
  }

  register() {
    this.router.navigate(['/login']);
  }
}
