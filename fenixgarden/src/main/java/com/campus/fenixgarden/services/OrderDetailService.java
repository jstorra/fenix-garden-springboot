package com.campus.fenixgarden.services;

import com.campus.fenixgarden.models.TransformResultList;
import com.campus.fenixgarden.models.dtos.OrderDetailDTO;
import com.campus.fenixgarden.models.orderdetail.OrderDetail;
import com.campus.fenixgarden.repositories.OrderDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class OrderDetailService {
    @Autowired
    OrderDetailRepository orderDetailRepository;

    public List<OrderDetailDTO> getAllOrderDetails() {
        return orderDetailRepository.findAll().stream()
                .map(OrderDetail::toDTO)
                .toList();
    }

    // 1)
    public List<Map<Object, Object>> calculateTotalRevenue() {
        List<Object[]> results = orderDetailRepository.calculateTotalRevenue();
        return TransformResultList.transformResultList(results, "baseImponible", "iva", "totalRevenue");
    }

    // 2)
    public List<Map<Object, Object>> calculateRevenueByProduct() {
        List<Object[]> results = orderDetailRepository.calculateRevenueByProduct();
        return TransformResultList.transformResultList(results, "baseImponible", "iva", "totalRevenue");
    }

    // 3)
    public List<Map<Object, Object>> calculateRevenueByProductFilteredByOR() {
        List<Object[]> results = orderDetailRepository.calculateRevenueByProductFilteredByOR();
        return TransformResultList.transformResultList(results, "baseImponible", "iva", "totalRevenue");
    }

    // 4)
    public List<Map<Object, Object>> listTotalSalesOfProductsOver3000Euros() {
        List<Object[]> results = orderDetailRepository.listTotalSalesOfProductsOver3000Euros();
        return TransformResultList.transformResultList(results, "unitsSold", "totalRevenue", "totalWithIVA");
    }

    // 5)
    public List<Map<Object, Object>> calculateNumberOfProductsPerOrder() {
        List<Object[]> results = orderDetailRepository.calculateNumberOfProductsPerOrder();
        return TransformResultList.transformResultList(results, "orderCode", "count");
    }

    // 6)
    public List<Map<Object, Object>> calculateTotalQuantityPerOrder() {
        List<Object[]> results = orderDetailRepository.calculateTotalQuantityPerOrder();
        return TransformResultList.transformResultList(results, "orderCode", "amount");
    }
}
