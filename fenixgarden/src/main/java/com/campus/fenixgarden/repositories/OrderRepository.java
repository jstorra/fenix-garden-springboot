package com.campus.fenixgarden.repositories;

import com.campus.fenixgarden.models.Order;
import com.campus.fenixgarden.services.OrderService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {
    //1
    @Query("SELECT DISTINCT o.status FROM Order o")
    List<String> findDistinctStatus();
    //2
    @Query("SELECT o.orderCode, o.customer.customerCode, o.deliverDate, o.expectedDate FROM Order o WHERE o.deliverDate > o.expectedDate")
    List<Object> findOrderDeliveredLate();
    //3
    @Query("SELECT o.orderCode, o.customer.customerCode, o.deliverDate, o.expectedDate FROM Order o WHERE (o.deliverDate - o.expectedDate) <= -2")
    List<Object> findOrderDeliveredLateAtLeast();
    //4
    @Query("SELECT o.orderCode, o.orderDate, o.status, o.comments, o.customer.customerCode FROM Order o WHERE o.status = 'rechazado' AND FUNCTION('YEAR', o.orderDate) = ?1")
    List<Object> findRejectedOrdersInYear(String year);
    //5
    @Query("SELECT o.orderCode, o.orderDate, o.deliverDate, o.status FROM Order o WHERE FUNCTION('MONTH', o.deliverDate) = 1")
    List<Object> findAllOrdersDeliveredInJanuary();
    //6
    @Query("SELECT DISTINCT c.customerName FROM Customer c JOIN c.orders p WHERE p.deliverDate > p.expectedDate")
    List<String> findClientsWithDelayedDeliveries();
    //7
    @Query("SELECT o.status, COUNT(o) FROM Order o GROUP BY o.status ORDER BY COUNT(o) DESC")
    List<Object> countOrdersByState();

}
