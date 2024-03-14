package com.campus.fenixgarden.services;

import com.campus.fenixgarden.models.Customer;
import com.campus.fenixgarden.models.dtos.CustomerDTO;
import com.campus.fenixgarden.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService {
    private final CustomerRepository customerRepository;

    @Autowired
    public CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    public List<CustomerDTO> getAllCustomers() {
        return customerRepository.findAll().stream()
                .map(Customer::toDTO)
                .toList();
    }

    public List<CustomerDTO> findByCountryLikeIgnoreCase() {
        return customerRepository.findByCountryLikeIgnoreCase("spain").stream()
                .map(Customer::toDTO)
                .toList();
    }

    public List<Integer> findCustomerCodesWithPaymentsIn2008() {
        return customerRepository.findCustomerCodesWithPaymentsIn2008();
    }

    public List<CustomerDTO> findCustomersFromMadridWithRepSales1130() {
        return customerRepository.findCustomersFromMadridWithRepSales1130().stream()
                .map(Customer::toDTO)
                .toList();
    };
}
