package com.grupo.facuras.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "cliente")
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private String primerApellido;
    private String segundoApellido;
    private String email;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "cliente")
    private List<Factura> factura;


}
