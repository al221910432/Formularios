import { Component, OnInit } from '@angular/core';
import { cuatro } from './cuatro';

@Component({
  selector: 'app-curvamemoria',
  templateUrl: './curvamemoria.component.html',
  styleUrls: ['./curvamemoria.component.css']
})
export class CurvamemoriaComponent implements OnInit {

  cuatroModel = new cuatro('','','',0,0,0,0,0,'','','',0,0);
  
  constructor() {}

  ngOnInit() {}

  formularioEnviado(){
    
    console.log("El formulario fue enviado: ", this.cuatroModel)
  }


}
