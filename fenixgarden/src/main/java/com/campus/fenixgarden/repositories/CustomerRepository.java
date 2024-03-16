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
    List<Integer> clientsWithPaymentsYear(String year);

    // 3)
    @Query("SELECT c FROM Customer c "
            + "WHERE c.city = 'Madrid' "
            + "AND (c.repSales.employeeCode = 11 OR c.repSales.employeeCode = 30)")
    List<Customer> clientsInMadridWithSpecificRepresentatives();

    // 4)
    @Query("SELECT DISTINCT c.customerCode, c.customerName, CONCAT(e.name, ' ', e.lastName1, ' ', e.lastName2) "
            + "FROM Customer c "
            + "JOIN c.repSales e")
    List<Object[]> clientsSalesRepresentatives();

    // 5)
    @Query("SELECT DISTINCT c.customerCode, c.customerName, CONCAT(e.name, ' ', e.lastName1, ' ', e.lastName2) " +
            "FROM Customer c " +
            "JOIN c.repSales e " +
            "JOIN c.payments")
    List<Object[]> clientsWithPaymentsAndRepresentatives();

    // 6)
    @Query("SELECT DISTINCT c.customerCode, c.customerName, CONCAT(e.name, ' ', e.lastName1, ' ', e.lastName2) " +
            "FROM Customer c " +
            "JOIN c.repSales e " +
            "LEFT JOIN c.payments p " +
            "WHERE p IS NULL")
    List<Object[]> clientsWithoutPaymentsAndRepresentatives();

    // 7)
    @Query("SELECT DISTINCT c.customerCode, c.customerName, CONCAT(e.name, ' ', e.lastName1, ' ', e.lastName2), o.city " +
            "FROM Customer c " +
            "JOIN c.repSales e " +
            "JOIN e.office o " +
            "JOIN c.payments")
    List<Object[]> clientsWithPaymentsAndRepresentativesWithOfficeCity();

    // 8)
    @Query("SELECT DISTINCT c.customerCode, c.customerName, CONCAT(e.name, ' ', e.lastName1, ' ', e.lastName2), o.city " +
            "FROM Customer c " +
            "JOIN c.repSales e " +
            "JOIN e.office o " +
            "LEFT JOIN c.payments p " +
            "WHERE p IS NULL")
    List<Object[]> clientsWithoutPaymentsAndRepresentativesWithOfficeCity();

    // 9)
    @Query("SELECT DISTINCT c FROM Customer c " +
            "LEFT JOIN c.payments p " +
            "WHERE p IS NULL")
    List<Customer> clientsWithoutPayments();

    // 10)
    @Query("SELECT DISTINCT c FROM Customer c " +
            "LEFT JOIN c.orders o " +
            "WHERE o IS NULL")
    List<Customer> clientsWithoutOrders();

    // 11)
    @Query("SELECT c FROM Customer c " +
            "LEFT JOIN c.payments p " +
            "LEFT JOIN c.orders o " +
            "WHERE p IS NULL OR o IS NULL")
    List<Customer> clientsWithoutPaymentsAndOrders();

    // 12)
    @Query("SELECT c.customerName FROM Customer c " +
            "JOIN c.orders o " +
            "WHERE o.deliverDate > o.expectedDate " +
            "GROUP BY c.customerName")
    List<String> clientsWithLateDeliveries();

    // 13)
    @Query("SELECT c FROM Customer c " +
            "JOIN c.orders " +
            "LEFT JOIN c.payments p " +
            "WHERE p IS NULL")
    List<Customer> clientsWithOrdersButNoPayments();

    // 14)
    @Query("SELECT c.country, COUNT(*) " +
            "FROM Customer c " +
            "GROUP BY c.country")
    List<Object[]> clientsCountByCountry();

    // 15)
    @Query("SELECT COUNT(*) FROM Customer")
    int totalClients();

    // 16)
    @Query("SELECT COUNT(*) FROM Customer c WHERE c.city = ?1")
    int clientsCountInCity(String city);

    // 17)
    @Query("SELECT c.city, COUNT(*) FROM Customer c " +
            "WHERE c.city LIKE 'M%' " +
            "GROUP BY c.city")
    List<Object[]> clientsCountInCitiesStartingWithM();

    // 18)
    @Query("SELECT COUNT(*) FROM Customer c " +
            "WHERE c.repSales IS NULL")
    int clientsWithoutSalesRepresentative();

    // 19)
    @Query("SELECT " +
            "e.employeeCode, CONCAT(e.name, ' ', e.lastName1, ' ', e.lastName2), COUNT(*) " +
            "FROM Customer c " +
            "JOIN c.repSales e " +
            "GROUP BY e.employeeCode")
    List<Object[]> salesRepresentativesAndClientCount();

    // 20)
    @Query("SELECT " +
            "c.customerCode, c.customerName, CONCAT(c.contactName, ' ', c.contactLastName), " +
            "MIN(p.paymentDate), MAX(p.paymentDate) " +
            "FROM Customer c " +
            "JOIN c.payments p " +
            "GROUP BY c.customerCode")
    List<Object[]> firstLastPaymentDateByClient();
}
