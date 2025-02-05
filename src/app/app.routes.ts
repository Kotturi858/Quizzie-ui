import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InstructionsComponent } from './pages/instructions/instructions.component';
import { LoginComponent } from './pages/login/login.component';
import { QCardComponent } from './shared/components/q-card/q-card.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'instructions', component: InstructionsComponent },
  { path: 'q-card', component: QCardComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/dashboard' },
];
