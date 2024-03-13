package com.campus.fenixgarden.services;


import com.campus.fenixgarden.models.Order;
import com.campus.fenixgarden.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    @Autowired
    public OrderRepository orderRepository;

    public List<Order> getAllOrders(){
        return orderRepository.findAll();
    }
}
