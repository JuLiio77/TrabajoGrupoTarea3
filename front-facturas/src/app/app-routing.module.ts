import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearFacturaComponent } from './crear-factura/crear-factura.component';
import { BuscarClienteComponent } from './buscar-cliente/buscar-cliente.component';

const routes: Routes = [

  { path: 'crear-factura', component: CrearFacturaComponent },
  { path: 'buscar-cliente', component: BuscarClienteComponent },
  { path: '', redirectTo: '/crear-factura', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*
// crear-factura.component.ts
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FacturaService } from '../factura.service';

@Component({
  selector: 'app-crear-factura',
  templateUrl: './crear-factura.component.html',
  styleUrls: ['./crear-factura.component.css']
})
export class CrearFacturaComponent {
  facturaForm = new FormGroup({
    importeTotal: new FormControl(''),
    idFactura: new FormControl(''),
    clienteId: new FormControl('')
  });

  constructor(private facturaService: FacturaService) {}

  onSubmit() {
    this.facturaService.guardarFactura(this.facturaForm.value);
  }
}


// factura.service.ts
import { Injectable } from '@angular/core';
import { Factura } from './factura.model';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  facturas: Factura[] = [];

  guardarFactura(factura: Factura) {
    this.facturas.push(factura);
  }

  obtenerFacturas(clienteId: number) {
    return this.facturas.filter(factura => factura.clienteId === clienteId);
  }
}
 // buscar-cliente.component.ts
import { Component } from '@angular/core';
import { FacturaService } from '../factura.service';

@Component({
  selector: 'app-buscar-cliente',
  templateUrl: './buscar-cliente.component.html',
  styleUrls: ['./buscar-cliente.component.css']
})
export class BuscarClienteComponent {
  clienteId: number;
  facturas: Factura[];

  constructor(private facturaService: FacturaService) {}

  buscar() {
    this.facturas = this.facturaService.obtenerFacturas(this.clienteId);
  }
}


*/ 