import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ThemeService } from './shared/services/theme.service';
import { InstructionsComponent } from './pages/instructions/instructions.component';
import { QCardComponent } from './shared/components/q-card/q-card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, DashboardComponent, InstructionsComponent, QCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  theme = inject(ThemeService)
}
