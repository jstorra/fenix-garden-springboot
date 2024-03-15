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

    public List<CustomerDTO> findByCountryLikeIgnoreCase(String country) {
        return customerRepository.findByCountryLikeIgnoreCase(country).stream()
                .map(Customer::toDTO)
                .toList();
    }

    public List<Integer> findCustomerCodesWithPaymentsInYear(String year) {
        return customerRepository.findCustomerCodesWithPaymentsInYear(year);
    }

    public List<CustomerDTO> findCustomersFromMadridWithRepSales1130() {
        return customerRepository.findCustomersFromMadridWithRepSales1130().stream()
                .map(Customer::toDTO)
                .toList();
    }

    public List<Object[]> findCustomersWithRepSales() {
        return customerRepository.findCustomersWithRepSales();
    }

    public List<Object[]> findCustomersWithPaymentsAndRepSales() {
        return customerRepository.findCustomersWithPaymentsAndRepSales();
    }

    public List<Object[]> findCustomersWithoutPaymentsAndRepSales() {
        return customerRepository.findCustomersWithoutPaymentsAndRepSales();
    }

    public List<Object[]> findCustomersWithPaymentsAndRepSalesAndOfficeCity() {
        return customerRepository.findCustomersWithPaymentsAndRepSalesAndOfficeCity();
    }

    public List<Object[]> findCustomersWithoutPaymentsAndRepSalesAndOfficeCity() {
        return customerRepository.findCustomersWithoutPaymentsAndRepSalesAndOfficeCity();
    }

    public List<CustomerDTO> findCustomersWithoutPayments() {
        return customerRepository.findCustomersWithoutPayments().stream()
                .map(Customer::toDTO)
                .toList();
    }

    public List<CustomerDTO> findCustomersWithoutOrders() {
        return customerRepository.findCustomersWithoutOrders().stream()
                .map(Customer::toDTO)
                .toList();
    }

    public List<CustomerDTO> findCustomersWithoutPaymentsAndOrders() {
        return customerRepository.findCustomersWithoutPaymentsAndOrders().stream()
                .map(Customer::toDTO)
                .toList();
    }

    public List<String> findCustomersWithLateDeliveries() {
        return customerRepository.findCustomersWithLateDeliveries();
    }
}
