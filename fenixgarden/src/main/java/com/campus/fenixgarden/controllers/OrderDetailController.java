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

    @GetMapping("/total-revenue")
    public List<Object> calculateTotalRevenue(){
        return orderDetailService.calculateTotalRevenue();
    }

    @GetMapping("/total-revenue-by-product")
    public List<Object> calculateRevenueByProduct(){
        return orderDetailService.calculateRevenueByProduct();
    }
    @GetMapping("/total-revenue-by-product-by-or")
    public List<Object> calculateRevenueByProductFilteredByOR(){
        return orderDetailService.calculateRevenueByProductFilteredByOR();
    }
    @GetMapping("/list-total-sales-product-over")
    public List<Object> listTotalSalesOfProductsOver3000Euros(){
        return orderDetailService.listTotalSalesOfProductsOver3000Euros();
    }
    @GetMapping("/number-of-product-per-order")
    public List<Object> calculateNumberOfProductsPerOrder(){
        return orderDetailService.calculateNumberOfProductsPerOrder();
    }

    @GetMapping("/total-amount-per-order")
    public  List<Object> calculateTotalQuantityPerOrder(){
        return orderDetailService.calculateTotalQuantityPerOrder();
    }
}
