package com.campus.fenixgarden.services;

import com.campus.fenixgarden.models.Payment;
import com.campus.fenixgarden.repositories.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaymentService {
    private final PaymentRepository paymentRepository;

    @Autowired
    public PaymentService(PaymentRepository paymentRepository) {
        this.paymentRepository = paymentRepository;
    }

    public List<Payment> getALllPayments() {
        return paymentRepository.findAll();
    }
}
