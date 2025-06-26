import { Routes } from '@angular/router';
import { LoginComponent } from './Login/login';
import { AttendanceComponent } from './attendance/attendance';
import { authGuard } from '../Services/auth-guard';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'attendance', component: AttendanceComponent, canActivate: [authGuard] },
    { path: 'dashboard', component: AttendanceComponent, canActivate: [authGuard] },
    { path: '**', redirectTo: '' }

];
