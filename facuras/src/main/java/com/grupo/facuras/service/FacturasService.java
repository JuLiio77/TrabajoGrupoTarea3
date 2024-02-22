package com.grupo.facuras.service;

import com.grupo.facuras.model.Factura;
import com.grupo.facuras.repository.FacturasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class FacturasService {
    @Autowired
    private FacturasRepository facturasRepository;

    public List<Factura> listFacturas(){
        return facturasRepository.findAll();
    }

    public Factura saveFact(@RequestBody Factura factura){
        return facturasRepository.save(factura);
    }
}
