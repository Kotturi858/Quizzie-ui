import { CommonModule } from '@angular/common';
import { Component, effect, HostListener, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ThemeService } from '../shared/services/theme.service';
import { RippleModule } from 'primeng/ripple';
import { NgxFadeComponent } from '@omnedia/ngx-fade';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, ButtonModule, RippleModule, NgxFadeComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  themeService = inject(ThemeService);
  showOptions: boolean = false;
  iconnie = 'pi pi-sun';
  router = inject(Router);
  constructor() {
    effect(() => {
      this.iconnie =
        this.themeService.isDarkMode() === 'dark' ? 'pi pi-sun' : 'pi pi-moon';
    });
  }
  toggleOptions() {
    this.showOptions = !this.showOptions;
  }

  onHelp() {
    console.log('Help clicked');
  }

  onLogout() {
    console.log('Logout clicked');
    this.router.navigate(['/login']);
    // Perform logout action, e.g., redirecting to login or clearing session.
  }

  // Close the options box when the user scrolls
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.hideOptions();
  }

  // Close the options box when the user presses the Escape key
  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.hideOptions();
    }
  }

  // Close the options box when clicking outside of it
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const optionsBox = document.querySelector('.options-box');
    if (optionsBox && !optionsBox.contains(event.target as Node)) {
      this.hideOptions();
    }
  }

  // Method to hide the options box
  hideOptions() {
    this.showOptions = false;
  }
}
