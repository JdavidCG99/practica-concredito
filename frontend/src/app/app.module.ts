import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegationComponent } from './components/navegation/navegation.component';
import { ProspectoFormComponent } from './components/prospecto-form/prospecto-form.component';
import { ProspectosListComponent } from './components/prospectos-list/prospectos-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegationComponent,
    ProspectoFormComponent,
    ProspectosListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
