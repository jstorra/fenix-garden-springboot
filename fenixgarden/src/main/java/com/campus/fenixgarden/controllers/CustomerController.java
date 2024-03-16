package com.campus.fenixgarden.controllers;

import com.campus.fenixgarden.models.dtos.CustomerDTO;
import com.campus.fenixgarden.services.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

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

    // 1)
    @GetMapping("/clients-from-country/{country}") // Spain
    public List<CustomerDTO> findByCountryLikeIgnoreCase(@PathVariable String country) {
        return customerService.findByCountryLikeIgnoreCase(country);
    }

    // 2)
    @GetMapping("/clients-with-payments-year/{year}") // 2008
    public List<Integer> clientsWithPaymentsYear(@PathVariable String year) {
        return customerService.clientsWithPaymentsYear(year);
    }

    // 3)
    @GetMapping("/clients-in-madrid-with-specific-representatives")
    public List<CustomerDTO> clientsInMadridWithSpecificRepresentatives() {
        return customerService.clientsInMadridWithSpecificRepresentatives();
    }

    // 4)
    @GetMapping("/clients-sales-representatives")
    public List<Map<Object, Object>> clientsSalesRepresentatives() {
        return customerService.clientsSalesRepresentatives();
    }

    // 5)
    @GetMapping("/clients-with-payments-and-representatives")
    public List<Map<Object, Object>> clientsWithPaymentsAndRepresentatives() {
        return customerService.clientsWithPaymentsAndRepresentatives();
    }

    // 6)
    @GetMapping("/clients-without-payments-and-representatives")
    public List<Map<Object, Object>> clientsWithoutPaymentsAndRepresentatives() {
        return customerService.clientsWithoutPaymentsAndRepresentatives();
    }

    // 7)
    @GetMapping("/clients-with-payments-and-representatives-with-office-city")
    public List<Map<Object, Object>> clientsWithPaymentsAndRepresentativesWithOfficeCity() {
        return customerService.clientsWithPaymentsAndRepresentativesWithOfficeCity();
    }

    // 8)
    @GetMapping("/clients-without-payments-and-representatives-with-office-city")
    public List<Map<Object, Object>> clientsWithoutPaymentsAndRepresentativesWithOfficeCity() {
        return customerService.clientsWithoutPaymentsAndRepresentativesWithOfficeCity();
    }

    // 9)
    @GetMapping("/clients-without-payments")
    public List<CustomerDTO> clientsWithoutPayments() {
        return customerService.clientsWithoutPayments();
    }

    // 10)
    @GetMapping("/clients-without-orders")
    public List<CustomerDTO> clientsWithoutOrders() {
        return customerService.clientsWithoutOrders();
    }

    // 11)
    @GetMapping("/clients-without-payments-and-orders")
    public List<CustomerDTO> clientsWithoutPaymentsAndOrders() {
        return customerService.clientsWithoutPaymentsAndOrders();
    }

    // 12)
    @GetMapping("/clients-with-late-deliveries")
    public List<String> clientsWithLateDeliveries() {
        return customerService.clientsWithLateDeliveries();
    }

    // 13)
    @GetMapping("/clients-with-orders-but-no-payments")
    public List<CustomerDTO> clientsWithOrdersButNoPayments() {
        return customerService.clientsWithOrdersButNoPayments();
    }

    // 14)
    @GetMapping("/clients-count-by-country")
    public List<Map<Object, Object>> clientsCountByCountry() {
        return customerService.clientsCountByCountry();
    }

    // 15)
    @GetMapping("/total-clients")
    public int totalClients() {
        return customerService.totalClients();
    }

    // 16)
    @GetMapping("/clients-count-city/{city}")
    public int clientsCountInCity(@PathVariable String city) {
        return customerService.clientsCountInCity(city);
    }

    // 17)
    @GetMapping("/clients-count-in-cities-starting-with-M")
    public List<Map<Object, Object>> clientsCountInCitiesStartingWithM() {
        return customerService.clientsCountInCitiesStartingWithM();
    }

    // 18)
    @GetMapping("/clients-without-sales-representative")
    public int clientsWithoutSalesRepresentative() {
        return customerService.clientsWithoutSalesRepresentative();
    }

    // 19)
    @GetMapping("/sales-representatives-and-client-count")
    public List<Map<Object, Object>> salesRepresentativesAndClientCount() {
        return customerService.salesRepresentativesAndClientCount();
    }

    // 20)
    @GetMapping("/first-last-payment-date-by-client")
    public List<Map<Object, Object>> firstLastPaymentDateByClient() {
        return customerService.firstLastPaymentDateByClient();
    }
}
