package com.grupo.facuras.repository;

import com.grupo.facuras.model.Facturas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FacturasRepository extends JpaRepository <Facturas, Long> {
}
