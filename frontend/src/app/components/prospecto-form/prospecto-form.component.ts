import { Component, HostBinding, OnInit } from '@angular/core';
import { Prospecto } from 'src/app/models/prospecto';
import { ProspectosService } from '../../services/prospectos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prospecto-form',
  templateUrl: './prospecto-form.component.html',
  styleUrls: ['./prospecto-form.component.css']
})
export class ProspectoFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  prospecto: Prospecto = {
    id: 0,
    nombre: '',
    primerApellido: '',
    segundoApellido: '',
    calle: '',
    numero: '',
    colonia: '',
    codigoPostal: '',
    telefono: '',
    RFC: '',
    nombreDocumentos: [],
    documentos: []
  };

  constructor(private prospectosService: ProspectosService , private router: Router) { }

  ngOnInit(): void {
  }

  saveProspecto(){
    console.log(this.prospecto);
    delete this.prospecto.id;

    this.prospectosService.saveProspecto(this.prospecto)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['prospectos']);
      }
    )
  }

}
