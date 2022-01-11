import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProspectoFormComponent } from './components/prospecto-form/prospecto-form.component';
import { ProspectosListComponent } from './components/prospectos-list/prospectos-list.component';
import { ProspectosService } from './services/prospectos.service';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/prospectos',
    pathMatch: 'full'
  },
  {
    path: 'prospectos',
    component: ProspectosListComponent
  },
  {
    path: 'prospectos/add',
    component: ProspectoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    ProspectosService
  ]
})
export class AppRoutingModule { }
