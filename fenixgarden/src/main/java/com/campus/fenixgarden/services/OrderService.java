package com.campus.fenixgarden.services;

import com.campus.fenixgarden.models.Order;
import com.campus.fenixgarden.models.TransformResultList;
import com.campus.fenixgarden.models.dtos.OrderDTO;
import com.campus.fenixgarden.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class OrderService {


    public final OrderRepository orderRepository;
    @Autowired
    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public List<OrderDTO> getAllOrders(){

        return orderRepository.findAll().stream()
                .map(Order::toDTO)
                .toList();
    }

    public List<String> findDistinctStatus(){
        return orderRepository.findDistinctStatus();
    }

    public List<Map<Object, Object>> findOrderDeliveredLate() {
        List<Object[]> results = orderRepository.findOrderDeliveredLate();
        return TransformResultList.transformResultList(results, "orderCode", "customerCode", "deliverDate", "expectedDate");
    }

    public List<Map<Object, Object>> findOrderDeliveredLateAtLeast() {
        List<Object[]> results = orderRepository.findOrderDeliveredLateAtLeast();
        return TransformResultList.transformResultList(results, "orderCode", "customerCode", "deliverDate", "expectedDate");
    }

    public  List<OrderDTO> findRejectedOrdersInYear(String year){
        return orderRepository.findRejectedOrdersInYear(year).stream()
                .map(Order::toDTO)
                .toList();
    }

    public List<OrderDTO> findAllOrdersDeliveredInJanuary(){
        return orderRepository.findAllOrdersDeliveredInJanuary().stream()
                .map(Order::toDTO)
                .toList();
    }

    public List<String> findClientsWithDelayedDeliveries(){
        return orderRepository.findClientsWithDelayedDeliveries();
    }

    public List<Map<Object, Object>> countOrdersByState() {
        List<Object[]> results = orderRepository.countOrdersByState();
        return TransformResultList.transformResultList(results, "status", "count");
    }

}
