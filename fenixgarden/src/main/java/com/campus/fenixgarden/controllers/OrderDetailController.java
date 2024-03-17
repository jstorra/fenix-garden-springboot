package com.campus.fenixgarden.controllers;

import com.campus.fenixgarden.models.dtos.OrderDetailDTO;
import com.campus.fenixgarden.models.orderdetail.OrderDetail;
import com.campus.fenixgarden.services.OrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/orderdetails")
@CrossOrigin("*")
public class OrderDetailController {
    private final OrderDetailService orderDetailService;

    @Autowired
    public OrderDetailController(OrderDetailService orderDetailService) {
        this.orderDetailService = orderDetailService;
    }
    @GetMapping
    public List<OrderDetailDTO> getAllOrderDetails(){
        return orderDetailService.getAllOrderDetails();
    }

    // 1)
    @GetMapping("/total-revenue")
    public List<Map<Object, Object>> calculateTotalRevenue(){
        return orderDetailService.calculateTotalRevenue();
    }

    // 2)
    @GetMapping("/total-revenue-by-product")
    public List<Map<Object, Object>> calculateRevenueByProduct(){
        return orderDetailService.calculateRevenueByProduct();
    }

    // 3)
    @GetMapping("/total-revenue-by-product-by-or")
    public List<Map<Object, Object>> calculateRevenueByProductFilteredByOR(){
        return orderDetailService.calculateRevenueByProductFilteredByOR();
    }

    // 4)
    @GetMapping("/list-total-sales-product-over")
    public List<Map<Object, Object>> listTotalSalesOfProductsOver3000Euros(){
        return orderDetailService.listTotalSalesOfProductsOver3000Euros();
    }

    // 5)
    @GetMapping("/number-of-product-per-order")
    public List<Map<Object, Object>> calculateNumberOfProductsPerOrder(){
        return orderDetailService.calculateNumberOfProductsPerOrder();
    }

    // 6)
    @GetMapping("/total-amount-per-order")
    public List<Map<Object, Object>> calculateTotalQuantityPerOrder(){
        return orderDetailService.calculateTotalQuantityPerOrder();
    }
}
