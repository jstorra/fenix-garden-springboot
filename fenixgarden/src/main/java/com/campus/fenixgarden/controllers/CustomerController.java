package com.campus.fenixgarden.controllers;

import com.campus.fenixgarden.models.dtos.CustomerDTO;
import com.campus.fenixgarden.services.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/customers")
@CrossOrigin("*")
public class CustomerController {
    private final CustomerService customerService;

    @Autowired
    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @GetMapping
    public List<CustomerDTO> getAllCustomers() {
        return customerService.getAllCustomers();
    }

    @GetMapping("/spanish-clients")
    public List<CustomerDTO> findByCountryLikeIgnoreCase() {
        return customerService.findByCountryLikeIgnoreCase();
    }

    @GetMapping("/clients-with-payments-2008")
    public List<Integer> findCustomerCodesWithPaymentsIn2008() {
        return customerService.findCustomerCodesWithPaymentsIn2008();
    }

    @GetMapping("/clients-in-madrid-with-specific-representatives")
    public List<CustomerDTO> findCustomersFromMadridWithRepSales1130() {
        return customerService.findCustomersFromMadridWithRepSales1130();
    };
}
