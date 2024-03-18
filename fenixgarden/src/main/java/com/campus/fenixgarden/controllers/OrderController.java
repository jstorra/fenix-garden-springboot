package com.campus.fenixgarden.controllers;

import com.campus.fenixgarden.models.dtos.OrderDTO;
import com.campus.fenixgarden.services.OrderService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/orders")
@CrossOrigin("*")
@PreAuthorize("hasRole('ADMIN')")
@SecurityRequirement(name = "bearerAuth")
public class OrderController {
    @Autowired
    OrderService orderService;

    @GetMapping
    public List<OrderDTO> getAllOrders(){
        return orderService.getAllOrders();
    }

    // 1)
    @GetMapping("/find-status")
    public List<String> findDistinctStatus(){
        return orderService.findDistinctStatus();
    }

    // 2)
    @GetMapping("/order-delivered-late")
    public List<Map<Object, Object>> findOrderDeliveredLate(){
        return orderService.findOrderDeliveredLate();
    }

    // 3)
    @GetMapping("/order-delivered-late-at-least")
    public List<Map<Object, Object>> findOrderDeliveredLateAtLeast(){
        return orderService.findOrderDeliveredLateAtLeast();
    }

    // 4)
    @GetMapping("/rejected-in-year/{year}")
    public  List<OrderDTO> findRejectedOrdersInYear(@PathVariable Object year){
        return orderService.findRejectedOrdersInYear(year);
    }

    // 5)
    @GetMapping("/delivered-january")
    public List<OrderDTO> findAllOrdersDeliveredInJanuary(){
        return orderService.findAllOrdersDeliveredInJanuary();
    }

    // 6)
    @GetMapping("/delayed-deliveries")
    public List<String> findClientsWithDelayedDeliveries(){
        return orderService.findClientsWithDelayedDeliveries();
    }

    // 7)
    @GetMapping("/count-by-state")
    public List<Map<Object, Object>> countOrdersByState(){
        return orderService.countOrdersByState();
    }
}
