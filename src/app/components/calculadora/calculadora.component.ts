import { Component, OnInit } from '@angular/core';
import { Domicilio } from '../../models/Domicilio';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {



  public total: number = 0;
  
  public domicilios: Domicilio[] = [
    {
      valor:15000,
      valorTransporte:1000
    },
    {
      valor:5000,
      valorTransporte:1000
    }
  ];

  constructor() { }

  ngOnInit() {

    //this.calculculaTotal();

  }

  calculculaTotal(){
     var totalPedidos = this.domicilios.map(item => item.valor).reduce((count, item) => count + item, 0);
     var totalDomicilios = this.domicilios.map(item => item.valorTransporte).reduce((count, item) => count + item, 0);
     this.total = totalPedidos-totalDomicilios;


    // this.domicilios.forEach(item => {
    //    this.total +=  item.valor - item.valorTransporte
    // });


    
  }

}
