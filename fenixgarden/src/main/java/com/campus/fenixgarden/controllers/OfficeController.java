package com.campus.fenixgarden.controllers;

import com.campus.fenixgarden.models.Office;
import com.campus.fenixgarden.models.dtos.OfficeDTO;
import com.campus.fenixgarden.services.OfficeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

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

    // 1)
    @GetMapping("/list-office-and-country")
    public List<Map<Object, Object>> listOfficeCodeAndCity(){
        return officeService.listOfficeCodeAndCity();
    }

    // 2)
    @GetMapping("/city-and-phone")
    public List<Map<Object, Object>> listCityAndPhoneOfSpanishOffices(){
        return officeService.listCityAndPhoneOfSpanishOffices();
    }

    // 3)
    @GetMapping("/list-addresses")
    public List<Map<Object, Object>> listOfficeAddressesWithClientsInFuenlabrada(){
        return officeService.listOfficeAddressesWithClientsInFuenlabrada();
    }

    // 4)
    @GetMapping("/without-employees-representing-clients-with-fruit-orders")
    public List<String> findOfficesWithoutFruitOrders() {
        return officeService.findOfficesWithoutFruitOrders();
    }
}
