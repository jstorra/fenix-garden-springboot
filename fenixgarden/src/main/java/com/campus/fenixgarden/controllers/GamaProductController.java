package com.campus.fenixgarden.controllers;

import com.campus.fenixgarden.models.dtos.GamaProductDTO;
import com.campus.fenixgarden.services.GamaProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/gamaproducts")
@CrossOrigin("*")
public class GamaProductController {
    private final GamaProductService gamaProductService;

    @Autowired
    public GamaProductController(GamaProductService gamaProductService) {
        this.gamaProductService = gamaProductService;
    }

    @GetMapping
    public List<GamaProductDTO> getAllGamaProducts(){
        return gamaProductService.getAllGamaProducts();
    }

    // 1)
    @GetMapping("/list-gamas")
    public List<Map<Object, Object>> listProductRangesPurchasedByCustomer(){
        return gamaProductService.listProductRangesPurchasedByCustomer();
    }
}
