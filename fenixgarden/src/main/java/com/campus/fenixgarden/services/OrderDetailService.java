package com.campus.fenixgarden.services;

import com.campus.fenixgarden.models.orderdetail.OrderDetail;
import com.campus.fenixgarden.repositories.OrderDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderDetailService {

    @Autowired
    public OrderDetailRepository orderDetailRepository;

    public List<OrderDetail> getAllOrderDetails(){
        return orderDetailRepository.findAll();
    }
}
