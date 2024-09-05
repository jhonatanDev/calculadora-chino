import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { HomeComponent } from './pages/home/home.component';
import { ListaPedidosComponent } from './components/lista-pedidos/lista-pedidos.component';

@NgModule({
  declarations: [	
    AppComponent,
      CalculadoraComponent,
      HomeComponent,
      ListaPedidosComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
