package com.campus.fenixgarden.controllers;

import com.campus.fenixgarden.models.Payment;
import com.campus.fenixgarden.models.dtos.PaymentDTO;
import com.campus.fenixgarden.services.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/payments")
@CrossOrigin("*")
public class PaymentController {
    private final PaymentService paymentService;

    @Autowired
    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    @GetMapping
    public List<PaymentDTO> getAllPayments() {
        return paymentService.getALllPayments();
    }

    @GetMapping("/payment-by-paypal")
    public List<PaymentDTO> findPaymentsIn2008ByPaypal(){
        return paymentService.findPaymentsIn2008ByPaypal();
    }

    @GetMapping("/way-to-pay")
    public List<String> findAllPaymentMethods(){
        return paymentService.findAllPaymentMethods();
    }

    @GetMapping("/average-payment")
    public Double findAveragePaymentFor2009(){
        return paymentService.findAveragePaymentFor2009();
    }

    @GetMapping("/total-payment-by-year")
    public List<Map<Object, Object>> findTotalPaymentsByYear(){
        return paymentService.findTotalPaymentsByYear();
    }
}


