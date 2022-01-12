import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ProspectosService } from '../../services/prospectos.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-evaluar',
  templateUrl: './ver-evaluar.component.html',
  styleUrls: ['./ver-evaluar.component.css']
})
export class VerEvaluarComponent implements OnInit {

  prospecto: any;
  documentos: any;
  estatus: any;
  newEstatus: any = '0';

  constructor(private prospectosServices: ProspectosService,private activedRouter: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    const params = this.activedRouter.snapshot.params;

    this.prospectosServices.getProspecto(params['id']).subscribe(
      res => {
        console.log(res);

        this.prospecto = res;
      }
    )

    this.prospectosServices.getDocumentos(params['id']).subscribe(
      res => {
        console.log(res);

        this.documentos = res;
      }
    )

    this.prospectosServices.getEstatus().subscribe(
      res => {
        console.log(res);

        this.estatus = res;
      }
    )
  }

  ShowSelected(){
    //console.log(this.newEstatus);

  }
  saveEstatus(id:string){
    console.log(id);
    console.log(this.newEstatus);

    this.prospectosServices.evaluarProspecto(id,this.newEstatus)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['prospectos']);
      }
    )
  }

}
