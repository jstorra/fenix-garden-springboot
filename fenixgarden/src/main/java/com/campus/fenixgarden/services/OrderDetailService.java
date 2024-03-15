package com.campus.fenixgarden.services;

import com.campus.fenixgarden.models.dtos.OrderDetailDTO;
import com.campus.fenixgarden.models.orderdetail.OrderDetail;
import com.campus.fenixgarden.repositories.OrderDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderDetailService {

    @Autowired
    public OrderDetailRepository orderDetailRepository;

    public List<OrderDetailDTO> getAllOrderDetails() {
        return orderDetailRepository.findAll().stream()
                .map(OrderDetail::toDTO)
                .toList();
    }

    public List<Object> calculateTotalRevenue(){
        return orderDetailRepository.calculateTotalRevenue();
    }

    public List<Object> calculateRevenueByProduct(){
        return orderDetailRepository.calculateRevenueByProduct();
    }

    public List<Object> calculateRevenueByProductFilteredByOR(){
        return orderDetailRepository.calculateRevenueByProductFilteredByOR();
    }

    public List<Object> listTotalSalesOfProductsOver3000Euros(){
        return orderDetailRepository.listTotalSalesOfProductsOver3000Euros();
    }

    public List<Object> calculateNumberOfProductsPerOrder(){
        return orderDetailRepository.calculateNumberOfProductsPerOrder();
    }

    public  List<Object> calculateTotalQuantityPerOrder(){
        return orderDetailRepository.calculateTotalQuantityPerOrder();
    }
}
