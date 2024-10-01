import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => import('./pages/patient-manager/patient-manager.module').then(m => m.PatientManagerModule) },
];
