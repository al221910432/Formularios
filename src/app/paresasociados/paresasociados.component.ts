import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-paresasociados',
  templateUrl: './paresasociados.component.html',
  styleUrls: ['./paresasociados.component.css']
})
export class ParesasociadosComponent implements OnInit {

  sumaValores: number = 0;
  malValores: number = 0;
  omitirValores: number = 0;
   
  valoresSeleccionados: number[] = [];
  constructor() {}

  ngOnInit() {}

  

  actualizarSuma(event: any, valor: number) {
    if (event.target.checked) {
      this.sumaValores += valor;
    } else {
      this.sumaValores -= valor;
    }
   const total = 12;
    const porcentaje = (this.sumaValores * 100) / total;
    const sumaObjeto = { perseveraciones: this.sumaValores,total: this.sumaValores,porcentaje};
  console.log(JSON.stringify(sumaObjeto));
  }

 

  erroresSuma(event: any, valor: number) {
    if (event.target.checked) {
      this.malValores += valor;
    } else {
      this.malValores -= valor;
    }
    const sumaObjeto = { errores: this.malValores };
  console.log(JSON.stringify(sumaObjeto));
  }

  omitirSuma(event: any, valor: number) {
    if (event.target.checked) {
      this.omitirValores += valor;
    } else {
      this.omitirValores -= valor;
    }
    const sumaObjeto = { Intrusiones: this.omitirValores };
  console.log(JSON.stringify(sumaObjeto));
  }

  

}
