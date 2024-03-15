package com.campus.fenixgarden.controllers;

import com.campus.fenixgarden.models.dtos.OrderDTO;
import com.campus.fenixgarden.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/rejected-in-year/{year}")
    public  List<Object> findRejectedOrdersInYear(@PathVariable String year){
        return orderService.findRejectedOrdersInYear(year);
    }

    @GetMapping("/delivered-january")
    public List<Object> findAllOrdersDeliveredInJanuary(){
        return orderService.findAllOrdersDeliveredInJanuary();
    }

    @GetMapping("/delayed-deliveries")
    public List<String> findClientsWithDelayedDeliveries(){
        return orderService.findClientsWithDelayedDeliveries();
    }

    @GetMapping("/count-by-state")
    public List<Object> countOrdersByState(){
        return orderService.countOrdersByState();
    }
}
