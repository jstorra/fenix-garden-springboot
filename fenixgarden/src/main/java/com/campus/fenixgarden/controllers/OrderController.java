package com.campus.fenixgarden.controllers;

import com.campus.fenixgarden.models.dtos.OrderDTO;
import com.campus.fenixgarden.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/orders")
@CrossOrigin("*")
public class OrderController {

    private final OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping
    public List<OrderDTO> getAllOrders(){
        return orderService.getAllOrders();
    }

    @GetMapping("/find-status")
    public List<String> findDistinctStatus(){
        return orderService.findDistinctStatus();
    }

    @GetMapping("/order-delivered-late")
    public List<Object> findOrderDeliveredLate(){
        return orderService.findOrderDeliveredLate();
    }

    @GetMapping("/order-delivered-late-at-least")
    public List<Object> findOrderDeliveredLateAtLeast(){
        return orderService.findOrderDeliveredLateAtLeast();
    }
}
