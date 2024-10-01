import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-patient-manager',
  templateUrl: './patient-manager.component.html',
  styleUrls: ['./patient-manager.component.scss']
})
export class PatientManagerComponent implements OnInit {
  patients: any[] = [];
  newPatient = { name: '', phone: '', appointmentDay: '', appointmentTime: '', message: '' };
  qrCode: string | null = null;

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.loadPatients();
    this.getQrCode(); 
}

formatPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, '').substring(0, 15); 
  return cleaned.replace(/^(\d{2})(\d)/, '($1) $2').replace(/(\d)(\d{4})$/, '$1-$2');
}

formatTime(time: string): string {
  const cleaned = time.replace(/\D/g, '').substring(0, 4); 
  return cleaned.replace(/^(\d{2})(\d)/, '$1:$2');
}

onPhoneInput(event: any) {
  const input = event.target.value;
  this.newPatient.phone = this.formatPhone(input);
}

onTimeInput(event: any) {
  const input = event.target.value;
  const formattedTime = this.formatTime(input);
  
  const [hours, minutes] = formattedTime.split(':').map(Number);
  if ((hours >= 0 && hours <= 23) && (minutes >= 0 && minutes <= 59)) {
    this.newPatient.appointmentTime = formattedTime;
  } else {
    this.newPatient.appointmentTime = ''; 
  }
}


loadPatients() {
  this.patientService.getPatients().subscribe((data: any[]) => { 
    console.log('Pacientes carregados:', data);
    this.patients = data;
  }, error => {
    console.error('Erro ao carregar pacientes:', error); 
  });
}
addPatient() {
  this.newPatient.phone = this.formatPhone(this.newPatient.phone);
  this.newPatient.appointmentTime = this.formatTime(this.newPatient.appointmentTime);
  this.patientService.addPatient(this.newPatient).subscribe(() => {
    this.loadPatients();
    this.newPatient = { name: '', phone: '', appointmentDay: '', appointmentTime: '', message: '' };
  });
}

  removePatient(id: string) {
    this.patientService.removePatient(id).subscribe(() => {
      this.loadPatients();
    });
  }

  getQrCode() {
    this.patientService.getQrCode().subscribe((response: any) => { 
        this.qrCode = response.qrCode; 
    }, error => {
        console.error('Erro ao obter QR Code:', error);
    });
}
}