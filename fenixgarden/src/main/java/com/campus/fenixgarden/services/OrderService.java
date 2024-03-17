package com.campus.fenixgarden.services;

import com.campus.fenixgarden.exceptions.InvalidNumberFormatException;
import com.campus.fenixgarden.models.Order;
import com.campus.fenixgarden.models.TransformResultList;
import com.campus.fenixgarden.models.dtos.OrderDTO;
import com.campus.fenixgarden.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class OrderService {
    @Autowired
    OrderRepository orderRepository;

    public List<OrderDTO> getAllOrders(){
        return orderRepository.findAll().stream()
                .map(Order::toDTO)
                .toList();
    }

    // 1)
    public List<String> findDistinctStatus(){
        return orderRepository.findDistinctStatus();
    }

    // 2)
    public List<Map<Object, Object>> findOrderDeliveredLate() {
        List<Object[]> results = orderRepository.findOrderDeliveredLate();
        return TransformResultList.transformResultList(results, "orderCode", "customerCode", "deliverDate", "expectedDate");
    }

    // 3)
    public List<Map<Object, Object>> findOrderDeliveredLateAtLeast() {
        List<Object[]> results = orderRepository.findOrderDeliveredLateAtLeast();
        return TransformResultList.transformResultList(results, "orderCode", "customerCode", "deliverDate", "expectedDate");
    }

    // 4)
    public  List<OrderDTO> findRejectedOrdersInYear(Object year){
        try {
            int parsedYear = Integer.parseInt(year.toString());
            return orderRepository.findRejectedOrdersInYear(parsedYear).stream()
                    .map(Order::toDTO)
                    .toList();
        } catch (NumberFormatException e) {
            throw new InvalidNumberFormatException("The parameter entered '" + year + "' doesn't have a valid format");
        }

    }

    // 5)
    public List<OrderDTO> findAllOrdersDeliveredInJanuary(){
        return orderRepository.findAllOrdersDeliveredInJanuary().stream()
                .map(Order::toDTO)
                .toList();
    }

    // 6)
    public List<String> findClientsWithDelayedDeliveries(){
        return orderRepository.findClientsWithDelayedDeliveries();
    }

    // 7)
    public List<Map<Object, Object>> countOrdersByState() {
        List<Object[]> results = orderRepository.countOrdersByState();
        return TransformResultList.transformResultList(results, "status", "count");
    }
}
