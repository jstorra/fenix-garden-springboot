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

    @Query("SELECT DISTINCT o.status FROM Order o")
    List<String> findDistinctStatus();

    @Query("SELECT o.orderCode, o.customer.customerCode, o.deliverDate, o.expectedDate FROM Order o WHERE o.deliverDate > o.expectedDate")
    List<Object> findOrderDeliveredLate();

    @Query("SELECT o.orderCode, o.customer.customerCode, o.deliverDate, o.expectedDate FROM Order o WHERE (o.deliverDate - o.expectedDate) <= -2")
    List<Object> findOrderDeliveredLateAtLeast();


}
