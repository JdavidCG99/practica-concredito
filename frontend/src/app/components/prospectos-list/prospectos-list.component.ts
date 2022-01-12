import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ProspectosService } from '../../services/prospectos.service';
@Component({
  selector: 'app-prospectos-list',
  templateUrl: './prospectos-list.component.html',
  styleUrls: ['./prospectos-list.component.css']
})
export class ProspectosListComponent implements OnInit {

  prospectos: any = [];

  constructor(private prospectosService: ProspectosService , private router: Router) { }

  ngOnInit(){
    this.prospectosService.index().subscribe(
      res => {
        this.prospectos = res;
      }
    )
  }



}
