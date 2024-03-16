package com.campus.fenixgarden.repositories;

import com.campus.fenixgarden.models.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, String> {
    //1
    @Query("SELECT p " +
            "FROM Payment p " +
            "WHERE FUNCTION('YEAR', p.paymentDate) = 2008 " +
            "AND p.wayToPay = 'Paypal' " +
            "ORDER BY p.total DESC")
    List<Payment> findPaymentsIn2008ByPaypal();

    //2
    @Query("SELECT DISTINCT p.wayToPay FROM Payment p")
    List<String> findAllPaymentMethods();

    //3
    @Query("SELECT AVG(p.total) FROM Payment p WHERE YEAR(p.paymentDate) = 2009")
    double findAveragePaymentFor2009();

    //4
    @Query("SELECT YEAR(p.paymentDate) AS year, SUM(p.total) AS totalAmount " +
            "FROM Payment p " +
            "GROUP BY YEAR(p.paymentDate)")
    List<Object[]> findTotalPaymentsByYear();
}
