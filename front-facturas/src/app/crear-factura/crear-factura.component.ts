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
    const facturaData = this.facturaForm.value;
    facturaData.idFactura = Number(facturaData.idFactura);
    this.facturaService.guardarFactura(facturaData);
  }
  

}
