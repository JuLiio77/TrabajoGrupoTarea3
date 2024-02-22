import { Injectable } from '@angular/core';
import { Factura } from './model/factura';

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



  constructor() { }
}
