import { Component } from '@angular/core';
import { Domicilio } from '../../models/Domicilio';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrl: './lista-pedidos.component.css'
})
export class ListaPedidosComponent {

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

}
