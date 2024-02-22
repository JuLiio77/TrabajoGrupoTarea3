package com.grupo.facuras.service;

import com.grupo.facuras.repository.FacturasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FacturasService {
    @Autowired
    private FacturasRepository facturasRepository;
}
