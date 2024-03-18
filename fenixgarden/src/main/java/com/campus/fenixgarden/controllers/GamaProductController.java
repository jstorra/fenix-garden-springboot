package com.campus.fenixgarden.controllers;

import com.campus.fenixgarden.models.dtos.GamaProductDTO;
import com.campus.fenixgarden.services.GamaProductService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/gamaproducts")
@CrossOrigin("*")
@PreAuthorize("hasRole('ADMIN')")
@SecurityRequirement(name = "bearerAuth")
public class GamaProductController {
    @Autowired
    GamaProductService gamaProductService;

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
