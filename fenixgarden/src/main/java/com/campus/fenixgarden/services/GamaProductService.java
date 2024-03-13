package com.campus.fenixgarden.services;

import com.campus.fenixgarden.models.GamaProduct;
import com.campus.fenixgarden.models.dtos.GamaProductDTO;
import com.campus.fenixgarden.repositories.GamaProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GamaProductService {

    @Autowired
    public GamaProductRepository gamaProductRepository;

    public List<GamaProductDTO> getAllGamaProducts(){
        return gamaProductRepository.findAll().stream()
                .map(GamaProduct::toDTO)
                .toList();
    }
}
