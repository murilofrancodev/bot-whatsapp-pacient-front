import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientManagerComponent } from './patient-manager.component';

const routes: Routes = [
  { path: '', component: PatientManagerComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientManagerRoutingModule { }