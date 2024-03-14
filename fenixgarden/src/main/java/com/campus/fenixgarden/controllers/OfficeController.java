package com.campus.fenixgarden.controllers;

import com.campus.fenixgarden.models.dtos.OfficeDTO;
import com.campus.fenixgarden.services.OfficeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/offices")
@CrossOrigin("*")
public class OfficeController {
    private final OfficeService officeService;

    @Autowired
    public OfficeController(OfficeService officeService) {
        this.officeService = officeService;
    }

    @GetMapping
    public List<OfficeDTO> getAllOffices() {
        return officeService.getAllOffices();
    }
}
