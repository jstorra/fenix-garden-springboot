package com.campus.fenixgarden.services;

import com.campus.fenixgarden.models.Payment;
import com.campus.fenixgarden.models.TransformResultList;
import com.campus.fenixgarden.models.dtos.PaymentDTO;
import com.campus.fenixgarden.repositories.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class PaymentService {
    private final PaymentRepository paymentRepository;

    @Autowired
    public PaymentService(PaymentRepository paymentRepository) {
        this.paymentRepository = paymentRepository;
    }

    public List<PaymentDTO> getALllPayments() {
        return paymentRepository.findAll().stream()
                .map(Payment::toDTO)
                .toList();
    }

    // 1)
    public List<PaymentDTO> findPaymentsIn2008ByPaypal(){
        return paymentRepository.findPaymentsIn2008ByPaypal().stream()
                .map(Payment::toDTO)
                .toList();
    }

    // 2)
    public List<String> findAllPaymentMethods(){
        return paymentRepository.findAllPaymentMethods();
    }

    // 3)
    public double findAveragePaymentFor2009(){
        return paymentRepository.findAveragePaymentFor2009();
    }

    // 4)
    public List<Map<Object, Object>> findTotalPaymentsByYear() {
        List<Object[]> results = paymentRepository.findTotalPaymentsByYear();
        return TransformResultList.transformResultList(results, "paymentDate", "total");
    }
}
