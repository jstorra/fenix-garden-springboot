package com.campus.fenixgarden.services;

import com.campus.fenixgarden.models.Order;
import com.campus.fenixgarden.models.dtos.OrderDTO;
import com.campus.fenixgarden.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.Calendar;
import java.util.List;

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

    public List<Object> findOrderDeliveredLate(){
        return orderRepository.findOrderDeliveredLate();
    }

     public List<Object> findOrderDeliveredLateAtLeast(){
        return orderRepository.findOrderDeliveredLateAtLeast();
     }

    public  List<Object> findRejectedOrdersInYear(String year){
        return orderRepository.findRejectedOrdersInYear(year);
    }

    public List<Object> findAllOrdersDeliveredInJanuary(){
        return orderRepository.findAllOrdersDeliveredInJanuary();
    }

    public List<String> findClientsWithDelayedDeliveries(){
        return orderRepository.findClientsWithDelayedDeliveries();
    }

    public List<Object> countOrdersByState(){
        return orderRepository.countOrdersByState();
    }
}
