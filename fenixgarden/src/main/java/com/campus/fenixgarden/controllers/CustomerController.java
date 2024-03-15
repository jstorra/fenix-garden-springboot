package com.campus.fenixgarden.controllers;

import com.campus.fenixgarden.models.Customer;
import com.campus.fenixgarden.models.dtos.CustomerDTO;
import com.campus.fenixgarden.services.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/clients-from/{country}") // Spain
    public List<CustomerDTO> findByCountryLikeIgnoreCase(@PathVariable String country) {
        return customerService.findByCountryLikeIgnoreCase(country);
    }

    @GetMapping("/clients-with-payments/{year}") // 2008
    public List<Integer> findCustomerCodesWithPaymentsInYear(@PathVariable String year) {
        return customerService.findCustomerCodesWithPaymentsInYear(year);
    }

    @GetMapping("/clients-in-madrid-with-specific-representatives")
    public List<CustomerDTO> findCustomersFromMadridWithRepSales1130() {
        return customerService.findCustomersFromMadridWithRepSales1130();
    }

    @GetMapping("/clients-sales-representatives")
    public List<Object[]> findCustomersWithRepSales() {
        return customerService.findCustomersWithRepSales();
    }

    @GetMapping("/clients-with-payments-and-representatives")
    public List<Object[]> findCustomersWithPaymentsAndRepSales() {
        return customerService.findCustomersWithPaymentsAndRepSales();
    }

    @GetMapping("/clients-without-payments-and-representatives")
    public List<Object[]> findCustomersWithoutPaymentsAndRepSales() {
        return customerService.findCustomersWithoutPaymentsAndRepSales();
    }

    @GetMapping("/clients-with-payments-and-representatives-with-office-city")
    public List<Object[]> findCustomersWithPaymentsAndRepSalesAndOfficeCity() {
        return customerService.findCustomersWithPaymentsAndRepSalesAndOfficeCity();
    }

    @GetMapping("/clients-without-payments-and-representatives-with-office-city")
    public List<Object[]> findCustomersWithoutPaymentsAndRepSalesAndOfficeCity() {
        return customerService.findCustomersWithoutPaymentsAndRepSalesAndOfficeCity();
    }

    @GetMapping("/clients-without-payments")
    public List<CustomerDTO> findCustomersWithoutPayments() {
        return customerService.findCustomersWithoutPayments();
    }

    @GetMapping("/clients-without-orders")
    public List<CustomerDTO> findCustomersWithoutOrders() {
        return customerService.findCustomersWithoutOrders();
    }

    @GetMapping("/clients-without-payments-and-orders")
    public List<CustomerDTO> findCustomersWithoutPaymentsAndOrders() {
        return customerService.findCustomersWithoutPaymentsAndOrders();
    }

    @GetMapping("/clients-with-late-deliveries")
    public List<String> findCustomersWithLateDeliveries() {
        return customerService.findCustomersWithLateDeliveries();
    }
}
