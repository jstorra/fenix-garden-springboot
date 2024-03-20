package com.campus.fenixgarden.services;

import com.campus.fenixgarden.exceptions.InvalidNumberFormatException;
import com.campus.fenixgarden.exceptions.InvalidCountryFormatException;
import com.campus.fenixgarden.models.Customer;
import com.campus.fenixgarden.models.TransformResultList;
import com.campus.fenixgarden.models.dtos.CustomerDTO;
import com.campus.fenixgarden.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class CustomerService {
    @Autowired
    CustomerRepository customerRepository;

    public List<CustomerDTO> getAllCustomers() {
        return customerRepository.findAll().stream()
                .map(Customer::toDTO)
                .toList();
    }

    // 1)
    public List<CustomerDTO> findByCountryLikeIgnoreCase(String country) {
        char[] countryArray = country.toCharArray();
        for (char c : countryArray) {
            if (Character.isDigit(c))
                throw new InvalidCountryFormatException("The parameter must not contain numbers");
        }
        return customerRepository.findByCountryLikeIgnoreCase(country).stream()
                .map(Customer::toDTO)
                .toList();
    }

    // 2)
    public List<Integer> clientsWithPaymentsYear(Object year) {
        try {
            int parsedYear = Integer.parseInt(year.toString());
            return customerRepository.clientsWithPaymentsYear(parsedYear);
        } catch (NumberFormatException e) {
            throw new InvalidNumberFormatException("The parameter entered '" + year + "' doesn't have a valid format");
        }
    }

    // 3)
    public List<CustomerDTO> clientsInMadridWithSpecificRepresentatives() {
        return customerRepository.clientsInMadridWithSpecificRepresentatives().stream()
                .map(Customer::toDTO)
                .toList();
    }

    // 4)
    public List<Map<Object, Object>> clientsSalesRepresentatives() {
        List<Object[]> results = customerRepository.clientsSalesRepresentatives();
        return TransformResultList.transformResultList(results, "customerCode", "customerName", "repSalesName");
    }

    // 5)
    public List<Map<Object, Object>> clientsWithPaymentsAndRepresentatives() {
        List<Object[]> results = customerRepository.clientsWithPaymentsAndRepresentatives();
        return TransformResultList.transformResultList(results, "customerCode", "customerName", "repSalesName");
    }

    // 6)
    public List<Map<Object, Object>> clientsWithoutPaymentsAndRepresentatives() {
        List<Object[]> results = customerRepository.clientsWithoutPaymentsAndRepresentatives();;
        return TransformResultList.transformResultList(results, "customerCode", "customerName", "repSalesName");
    }

    // 7)
    public List<Map<Object, Object>> clientsWithPaymentsAndRepresentativesWithOfficeCity() {
        List<Object[]> results = customerRepository.clientsWithPaymentsAndRepresentativesWithOfficeCity();
        return TransformResultList.transformResultList(results, "customerCode", "customerName", "repSalesName", "officeCity");
    }

    // 8)
    public List<Map<Object, Object>> clientsWithoutPaymentsAndRepresentativesWithOfficeCity() {
        List<Object[]> results = customerRepository.clientsWithoutPaymentsAndRepresentativesWithOfficeCity();
        return TransformResultList.transformResultList(results, "customerCode", "customerName", "repSalesName", "officeCity");
    }

    // 9)
    public List<CustomerDTO> clientsWithoutPayments() {
        return customerRepository.clientsWithoutPayments().stream()
                .map(Customer::toDTO)
                .toList();
    }

    // 10)
    public List<CustomerDTO> clientsWithoutOrders() {
        return customerRepository.clientsWithoutOrders().stream()
                .map(Customer::toDTO)
                .toList();
    }

    // 11)
    public List<CustomerDTO> clientsWithoutPaymentsAndOrders() {
        return customerRepository.clientsWithoutPaymentsAndOrders().stream()
                .map(Customer::toDTO)
                .toList();
    }

    // 12)
    public List<String> clientsWithLateDeliveries() {
        return customerRepository.clientsWithLateDeliveries();
    }

    // 13)
    public List<CustomerDTO> clientsWithOrdersButNoPayments() {
        return customerRepository.clientsWithOrdersButNoPayments().stream()
                .map(Customer::toDTO)
                .toList();
    }

    // 14)
    public List<Map<Object, Object>> clientsCountByCountry() {
        List<Object[]> results = customerRepository.clientsCountByCountry();
        return TransformResultList.transformResultList(results, "country", "customers");
    }

    // 15)
    public int totalClients() {
        return customerRepository.totalClients();
    }

    // 16)
    public int clientsCountInCity(String city) {
        char[] cityArray = city.toCharArray();
        for (char c : cityArray) {
            if (Character.isDigit(c))
                throw new InvalidCountryFormatException("The parameter must not contain numbers");
        }
        return customerRepository.clientsCountInCity(city);
    }

    // 17)
    public List<Map<Object, Object>> clientsCountInCitiesStartingWithM(char letter) {
        if (Character.isDigit(letter))
                throw new InvalidCountryFormatException("The parameter must not contain numbers");

        List<Object[]> results = customerRepository.clientsCountInCitiesStartingWithM(letter);
        return TransformResultList.transformResultList(results, "city", "customers");
    }

    // 18)
    public int clientsWithoutSalesRepresentative() {
        return customerRepository.clientsWithoutSalesRepresentative();
    }

    // 19)
    public List<Map<Object, Object>> salesRepresentativesAndClientCount() {
        List<Object[]> results = customerRepository.salesRepresentativesAndClientCount();
        return TransformResultList.transformResultList(results, "repSalesCode", "repSalesName", "customers");
    }

    // 20)
    public List<Map<Object, Object>> firstLastPaymentDateByClient() {
        List<Object[]> results = customerRepository.firstLastPaymentDateByClient();
        return TransformResultList.transformResultList(results, "customerCode", "customerName", "contactName", "firstPayment", "lastPayment");
    }
}
