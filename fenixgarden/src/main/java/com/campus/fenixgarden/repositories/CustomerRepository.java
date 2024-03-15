package com.campus.fenixgarden.repositories;

import com.campus.fenixgarden.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {

    // 1)
    List<Customer> findByCountryLikeIgnoreCase(String country);

    // 2)
    @Query("SELECT DISTINCT p.customer.customerCode "
            + "FROM Payment p "
            + "WHERE YEAR(p.paymentDate) = ?1 "
            + "AND p.customer.customerCode IS NOT NULL")
    List<Integer> findCustomerCodesWithPaymentsInYear(String year);

    // 3)
    @Query("SELECT c FROM Customer c "
            + "WHERE c.city = 'Madrid' "
            + "AND (c.repSales.employeeCode = 11 OR c.repSales.employeeCode = 30)")
    List<Customer> findCustomersFromMadridWithRepSales1130();

    // 4)
    @Query("SELECT c.customerName, CONCAT(e.name, ' ', e.lastName1, ' ', e.lastName2) "
            + "FROM Customer c "
            + "JOIN c.repSales e")
    List<Object[]> findCustomersWithRepSales();

    // 5)
    @Query("SELECT DISTINCT c.customerName, CONCAT(e.name, ' ', e.lastName1, ' ', e.lastName2) " +
            "FROM Customer c " +
            "JOIN c.repSales e " +
            "JOIN c.payments")
    List<Object[]> findCustomersWithPaymentsAndRepSales();

    // 6)
    @Query("SELECT DISTINCT c.customerName, CONCAT(e.name, ' ', e.lastName1, ' ', e.lastName2) " +
            "FROM Customer c " +
            "JOIN c.repSales e " +
            "LEFT JOIN c.payments p " +
            "WHERE p IS NULL")
    List<Object[]> findCustomersWithoutPaymentsAndRepSales();

    // 7)
    @Query("SELECT DISTINCT c.customerName, CONCAT(e.name, ' ', e.lastName1, ' ', e.lastName2), o.city " +
            "FROM Customer c " +
            "JOIN c.repSales e " +
            "JOIN e.office o " +
            "JOIN c.payments")
    List<Object[]> findCustomersWithPaymentsAndRepSalesAndOfficeCity();

    // 8)
    @Query("SELECT DISTINCT c.customerName, CONCAT(e.name, ' ', e.lastName1, ' ', e.lastName2), o.city " +
            "FROM Customer c " +
            "JOIN c.repSales e " +
            "JOIN e.office o " +
            "LEFT JOIN c.payments p " +
            "WHERE p IS NULL")
    List<Object[]> findCustomersWithoutPaymentsAndRepSalesAndOfficeCity();

    // 9)
    @Query("SELECT DISTINCT c FROM Customer c " +
            "LEFT JOIN c.payments p " +
            "WHERE p IS NULL")
    List<Customer> findCustomersWithoutPayments();

    // 10)
    @Query("SELECT DISTINCT c FROM Customer c " +
            "LEFT JOIN c.orders o " +
            "WHERE o IS NULL")
    List<Customer> findCustomersWithoutOrders();

    // 11)
    @Query("SELECT c FROM Customer c " +
            "LEFT JOIN c.payments p " +
            "LEFT JOIN c.orders o " +
            "WHERE p IS NULL OR o IS NULL")
    List<Customer> findCustomersWithoutPaymentsAndOrders();

    // 12)
    @Query("SELECT c.customerName FROM Customer c " +
            "JOIN c.orders o " +
            "WHERE o.deliverDate > o.expectedDate " +
            "GROUP BY c.customerName")
    List<String> findCustomersWithLateDeliveries();
}
