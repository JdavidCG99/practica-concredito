import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prospecto } from '../models/prospecto'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class ProspectosService {
  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  index(){
    return this.http.get(`${this.API_URI}/prospectos`);
  }

  getProspecto( id:string ){
    return this.http.get(`${this.API_URI}/prospectos/${id}`);
  }

  saveProspecto( prospecto: Prospecto ){
    return this.http.post(`${this.API_URI}/prospectos` , prospecto);
  }

  evaluarProspecto( id: string , newEstatus: any) {
    return this.http.put(`${this.API_URI}/prospectos/evaluar/${id}`, newEstatus);
  }

}
