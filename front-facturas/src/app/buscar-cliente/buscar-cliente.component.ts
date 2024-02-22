import { Component } from '@angular/core';
import { FacturaService } from '../factura.service';
import { Factura } from '../model/factura';

@Component({
  selector: 'app-buscar-cliente',
  templateUrl: './buscar-cliente.component.html',
  styleUrls: ['./buscar-cliente.component.css']
})
export class BuscarClienteComponent {

  clienteId!: number;
  facturas: Factura[] = [];

  constructor(private facturaService: FacturaService) {}

  buscar() {
    this.facturas = this.facturaService.obtenerFacturas(this.clienteId);
  }

}
