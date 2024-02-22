package com.grupo.facuras.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "factura")
public class Facturas {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Double importe_total;
    private Long identificador;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "clientes_id")
    private List<Clientes> clientes;
}
