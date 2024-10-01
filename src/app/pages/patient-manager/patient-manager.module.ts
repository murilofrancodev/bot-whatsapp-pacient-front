import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { PatientManagerComponent } from './patient-manager.component';
import { provideHttpClient } from '@angular/common/http';
import { PatientService } from '../../services/patient.service';
import { PatientManagerRoutingModule } from './patient-manager-routing.module'; 

@NgModule({
  declarations: [
    PatientManagerComponent
  ],
  imports: [
    CommonModule,
    PatientManagerRoutingModule, 
    FormsModule,
  ],
  exports: [
    PatientManagerComponent 
  ],
  providers: [
    PatientService,
    provideHttpClient()
  ]
})
export class PatientManagerModule { }