package com.campus.fenixgarden.repositories;

import com.campus.fenixgarden.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {


    List<Customer> findByCountryLikeIgnoreCase(String country);

    @Query("SELECT DISTINCT p.customer.customerCode "
            + "FROM Payment p "
            + "WHERE YEAR(p.paymentDate) = 2008 "
            + "AND p.customer.customerCode IS NOT NULL")
    List<Integer> findCustomerCodesWithPaymentsIn2008();

    @Query("SELECT c FROM Customer c "
            + "WHERE c.city = 'Madrid' "
            + "AND (c.repSales.employeeCode = 11 OR c.repSales.employeeCode = 30)")
    List<Customer> findCustomersFromMadridWithRepSales1130();

}
