import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DetecciondigitosComponent } from './detecciondigitos/detecciondigitos.component';
import { FluideznoverbalComponent } from './fluideznoverbal/fluideznoverbal.component';
import { ParesasociadosComponent } from './paresasociados/paresasociados.component';
import { DibujossecuencialesComponent } from './dibujossecuenciales/dibujossecuenciales.component';
import { CambiomanoComponent } from './cambiomano/cambiomano.component';
import { CurvamemoriaComponent } from './curvamemoria/curvamemoria.component';

@NgModule({
  declarations: [
    AppComponent,
    DetecciondigitosComponent,
    FluideznoverbalComponent,
    ParesasociadosComponent,
    DibujossecuencialesComponent,
    CambiomanoComponent,
    CurvamemoriaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
