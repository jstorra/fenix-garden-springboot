package com.campus.fenixgarden.controllers;

import com.campus.fenixgarden.models.dtos.OrderDetailDTO;
import com.campus.fenixgarden.services.OrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/orderdetails")
@CrossOrigin("*")
public class OrderDetailController {

    public final OrderDetailService orderDetailService;

    @Autowired
    public OrderDetailController(OrderDetailService orderDetailService) {
        this.orderDetailService = orderDetailService;
    }
    @GetMapping
    public List<OrderDetailDTO> getAllOrderDetails(){
        return orderDetailService.getAllOrderDetails();
    }

}
