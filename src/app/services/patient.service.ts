import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private apiUrl = 'http://localhost:3000/patients'; 

  constructor(private http: HttpClient) { }

  addPatient(patient: any): Observable<any> {
    return this.http.post(this.apiUrl, patient);
  }

  removePatient(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getPatients(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getQrCode(): Observable<any> {
    return this.http.get('http://localhost:3000/qrcode'); 
  }
}